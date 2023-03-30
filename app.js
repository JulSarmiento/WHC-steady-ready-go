const express = require('express');
const log = require('morgan');
const bodyParser = require('body-parser');

const indexrouter = require('./src/routes/index');
const app = express();

app.use(log('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexrouter);


module.exports = app;