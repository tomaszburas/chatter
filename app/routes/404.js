const {Router} = require('express');
const HomeController = require('../controllers/home-controller')

const notFoundRouter = Router();

notFoundRouter
    .get('*', HomeController.notFound)

module.exports = notFoundRouter;
