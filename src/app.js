const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/products')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoutes)
app.use('/products', productsRoutes)

module.exports = app;