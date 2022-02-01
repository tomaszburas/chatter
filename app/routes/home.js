const {Router} = require('express');
const HomeController = require('../controllers/home-controller');
const {checkNotAuth, getUser} = require("../middleware/authorization");

const homeRouter = Router();

homeRouter
    .get('/', HomeController.main)

    .get('/check-authorization', getUser, HomeController.checkAuthorization)

    .get('/login', checkNotAuth, HomeController.loginPage)
    .post('/login', HomeController.loginUser)

    .get('/register', checkNotAuth, HomeController.registerPage)
    .post('/register', HomeController.registerUser)

    .get('/logout', HomeController.logout)

module.exports = homeRouter;
