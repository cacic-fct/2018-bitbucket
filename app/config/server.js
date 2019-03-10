const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./app'))
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app);


module.exports = app;