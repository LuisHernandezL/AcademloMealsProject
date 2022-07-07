const express = require('express');

//init app
const app = express();

//import app error
const { AppError } = './utils/appError.utils.js';

app.use(express.json());

module.exports = { app };
