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
    .get('/settings', (req, res) => {
        res.sendFile('settings.html', {
            root: join(__dirname, '../public/html/')
        })
    })
    .get('/app', (req, res) => {
        res.sendFile('chat.html', {
            root: join(__dirname, '../public/html/')
        })
    })
    .get('*', (req, res) => {
        res.sendFile('404.html', {
            root: join(__dirname, '../public/html/')
        })
    })

module.exports = homeRouter;
