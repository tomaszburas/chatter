const {Router} = require('express');
const HomeController = require('../controllers/home-controller');
const {checkNotAuth} = require("../middleware/authorization ");

const homeRouter = Router();

homeRouter
    .get('/login', checkNotAuth, HomeController.loginPage)
    .post('/login', HomeController.loginUser)

    .get('/register', checkNotAuth, HomeController.registerPage)
    .post('/register', HomeController.registerUser)

module.exports = homeRouter;
