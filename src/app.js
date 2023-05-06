const express = require('express');
const log = require('morgan');

const indexrouter = require('./routes');
const { errorHandler, notFoundHandler } = require('./middlewares');

const app = express();

app.use(log(process.env.ENVIRONMENT));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexrouter);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;