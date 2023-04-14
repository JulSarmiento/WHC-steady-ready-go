const express = require('express');
const log = require('morgan');

const indexrouter = require('./src/routes/index');
const errorHandlers = require('./src/middlewares/error.handlres');

const app = express();

app.use(log(process.env.ENVIROMENT));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexrouter);

app.use(errorHandlers);

module.exports = app;