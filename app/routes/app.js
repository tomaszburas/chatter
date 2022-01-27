const {Router} = require('express');
const AppController = require('../controllers/app-controller')

const appRouter = Router();

appRouter
    .get('/', AppController.main)
    .get('/settings', AppController.settings)

module.exports = appRouter;
