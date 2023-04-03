const express = require('express');
const log = require('morgan');
const bodyParser = require('body-parser');

const indexrouter = require('./src/routes/index');
const errorHandlers = require('./src/middlewares/error.handlres');

const app = express();

app.use(log('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexrouter);

app.use(errorHandlers);

module.exports = app;