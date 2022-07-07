const express = require('express');

//init app
const app = express();

app.use(express.json());
const { restaurantRouter } = require('./routes/restaurants.routes')

module.exports = { app };
