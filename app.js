const express = require('express');

//init app
const app = express();

app.use(express.json());

module.exports = { app };
