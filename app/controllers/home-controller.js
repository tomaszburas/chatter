const {join} = require('path');
const {UserRecord} = require("../db/records/user.record");

// Baza danych
const users = [];

class HomeController {
    loginPage(req, res) {
        res.sendFile('login.html', {
            root: join(__dirname, '../../public/html')
        })
    }

    async loginUser(req, res, next) {
        const {username, password} = req.body;
        try {
            await UserRecord.login(username, password);
            res
                .status(200)
                .end()
        } catch (e) {
            next(e);
        }
    }

    registerPage(req, res) {
        res.sendFile('register.html', {
            root: join(__dirname, '../../public/html')
        })
    }

    async registerUser(req, res, next) {
        const {username, password, email} = req.body;
        try {
            const newUser = new UserRecord({
                username: username.trim(),
                password: password.trim(),
                email: email.trim(),
                role: 'user',
            });

            await newUser.register();
            res
                .status(200)
                .end()
        } catch (e) {
            next(e);
        }
    }

    notFound(req, res) {
        res
            .status(404)
            .sendFile('404.html', {
            root: join(__dirname, '../../public/html')
        })
    }

}

module.exports = new HomeController();
