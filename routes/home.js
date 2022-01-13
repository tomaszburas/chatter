const {Router} = require('express');
const {join} = require('path');

const homeRouter = Router();

homeRouter
    .get('/login', (req, res) => {
        res.sendFile('login.html', {
            root: join(__dirname, '../public/html/')
        })
    })
    .get('/register', (req, res) => {
        res.sendFile('register.html', {
            root: join(__dirname, '../public/html/')
        })
    })

module.exports = homeRouter;
