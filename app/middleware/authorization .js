const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN} = require("../config");
const {users} = require("../db/records/user.record");

function authorization(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        const decoded = jwt.verify(access_token, ACCESS_TOKEN);
        const user = users.find(el => el.id === decoded.id);
            if (user) {
                req.user = user;
                next();
            } else {
                res.redirect('/login');
            }
    } else {
        res.redirect('/login');
    }
}

function checkNotAuth(req, res, next) {
    const {access_token} = req.cookies;
    if (access_token) {
        const decoded = jwt.verify(access_token, ACCESS_TOKEN);
        const user = users.find(el => el.id === decoded.id);
        if (user) {
            res.redirect('/app');
        } else {
            next();
        }
    } else {
        next();
    }
}

module.exports = {
    checkAuth: authorization,
    checkNotAuth,
}
