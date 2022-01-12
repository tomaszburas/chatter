require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override');

const homeRouter = require('./routes/home');

const app = express();

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static('public'));

app.use('/', homeRouter);

app.listen(process.env.PORT || 3000, () => console.log('Server has started.'));
