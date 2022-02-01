const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require ('path');

const homeRouter = require('./routes/home');
const appRouter = require("./routes/app");
const notFoundRouter = require("./routes/404");

const {PORT} = require("./config");
const {handleError} = require("./utils/errors");

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);
app.use('/app', appRouter);
app.use('*', notFoundRouter);

app.use(handleError);

app.listen(PORT, () => console.log('Server has started.'));
