const {Router} = require('express');
const AppController = require('../controllers/app-controller')
const {checkAuth} = require("../middleware/authorization ");

const appRouter = Router();

appRouter.use(checkAuth)

appRouter
    .get('/', AppController.main)
    .get('/settings', AppController.settings)

module.exports = appRouter;
