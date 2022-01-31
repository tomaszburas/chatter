const jwt = require('jsonwebtoken')
const {join} = require('path');
const {UserRecord} = require("../db/records/user.record");
const {ACCESS_TOKEN} = require("../config");

class HomeController {
    checkAuthorization(req, res) {
        res.json(req.user)
    }

    loginPage(req, res) {
        res.sendFile('login.html', {
            root: join(__dirname, '../../public/html')
        })
    }

    async loginUser(req, res, next) {
        const {username, password} = req.body;
        try {
            const id = await UserRecord.login(username, password);

            const payload = {
                username,
                id,
            }
            const token = jwt.sign(payload, ACCESS_TOKEN, {expiresIn: "1d"});
            res
                .status(200)
                .cookie(`access_token`, `${token}`, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                })
                .end();
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

    logout(req, res) {
        res
            .clearCookie('access_token')
            .redirect('/login')
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
