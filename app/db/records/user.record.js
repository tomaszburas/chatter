const {v4:uuid} = require('uuid');
const bcrypt = require('bcrypt');
const {ValidationError} = require("../../utils/errors");
const {validatePassword, validateEmail, checkRegisterData, checkLoginData} = require("../../utils/authorization");

const users = [];

class UserRecord {
    constructor(obj) {
        this.id = obj.id;
        this.username = obj.username;
        this.email = obj.email;
        this.password = obj.password;
        this.avatar = obj.avatar;
        this.role = obj.role;
        this.createdAt = obj.createdAt;
    }

    _validate() {
        if (this.username.length < 3) throw new ValidationError('Username must be longer than 3 characters');
        if (checkRegisterData(users, 'username', this.username)) throw new ValidationError('Given username already exists');

        if (this.password.length < 5 ) throw new ValidationError('Password must be longer than 5 characters');
        if (!validatePassword(this.password)) throw new ValidationError('Password must contains minimum eight characters, at least one letter and one number');

        if (!validateEmail(this.email)) throw new ValidationError('Incorrect email');
        if (checkRegisterData(users, 'email', this.email)) throw new ValidationError('Given email already exists');
    }

    async register() {
        this._validate();

        if (!this.id) this.id = uuid();
        if (!this.avatar) this.avatar = null;
        this.createdAt = new Date().toLocaleDateString();
        this.password = await bcrypt.hash(this.password, 10);

        users.push(this);
        return this.id;
    }

    static async login(username, password) {
        const user = checkLoginData(users, 'username', username);
        if (!user) throw new ValidationError('User with the given username does not exist');

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) throw new ValidationError('Incorrect password');

        return user.id;
    }
}

module.exports = {
    UserRecord,
    users,
}
