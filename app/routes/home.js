const {Router} = require('express');
const HomeController = require('../controllers/home-controller')

const homeRouter = Router();

homeRouter
    .get('/login', HomeController.login)
    .get('/register', HomeController.register)

module.exports = homeRouter;
