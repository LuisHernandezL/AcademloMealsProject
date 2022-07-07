const express = require('express');

//init app
const app = express();

//import app error
const { AppError } = './utils/appError.utils.js';

app.use(express.json());
const { restaurantRouter } = require('./routes/restaurants.routes')

module.exports = { app };
