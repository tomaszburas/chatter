const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN} = require("../config");

function checkAuth(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        try {
            const decoded = jwt.verify(access_token, ACCESS_TOKEN);
            req.user = {
                id: decoded.id,
                username: decoded.username,
                avatar: decoded.avatar,
                role: decoded.role,
            };
            next();
        } catch (err) {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
}

function getUser(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        try {
            const decoded = jwt.verify(access_token, ACCESS_TOKEN);
            req.user = {
                id: decoded.id,
                username: decoded.username,
                avatar: decoded.avatar,
                role: decoded.role,
            };
            next();
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
            jwt.verify(access_token, ACCESS_TOKEN);
            res.redirect('/app');
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
    getUser,
}
