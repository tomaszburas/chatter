const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN} = require("../config");
const {users} = require("../db/records/user.record");

function checkAuth(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        try {
            const decoded = jwt.verify(access_token, ACCESS_TOKEN);
            const user = users.find(el => el.id === decoded.id);
            if (user) {
                req.user = {
                    id: user.id,
                    username: user.username,
                    avatar: user.avatar,
                    role: user.role,
                };
                next();
            } else {
                res.redirect('/login');
            }
        } catch (err) {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
}

function checkHomePageAuth(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        try {
            const decoded = jwt.verify(access_token, ACCESS_TOKEN);
            const user = users.find(el => el.id === decoded.id);
            if (user) {
                req.user = {
                    id: user.id,
                    username: user.username,
                    avatar: user.avatar,
                    role: user.role,
                };
                next();
            } else {
                req.user = null;
                next();
            }
        } catch (err) {
            req.user = null;
            next();
        }
    } else {
        req.user = null;
        next();
    }
}

function checkNotAuth(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        try {
            const decoded = jwt.verify(access_token, ACCESS_TOKEN);
            const user = users.find(el => el.id === decoded.id);
            if (user) {
                res.redirect('/app');
            } else {
                next();
            }
        } catch (err) {
            next();
        }
    } else {
        next();
    }
}

module.exports = {
    checkAuth,
    checkNotAuth,
    checkHomePageAuth,
}
