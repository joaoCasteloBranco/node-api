require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  authSource: "admin"
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

const Product = require('./models/product')

const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/products')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoutes)
app.use('/products', productsRoutes)

module.exports = app;