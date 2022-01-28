const {Router} = require('express');
const HomeController = require('../controllers/home-controller')

const homeRouter = Router();

homeRouter
    .get('/login', HomeController.loginPage)
    .post('/login', HomeController.loginUser)

    .get('/register', HomeController.registerPage)
    .post('/register', HomeController.registerUser)

module.exports = homeRouter;
