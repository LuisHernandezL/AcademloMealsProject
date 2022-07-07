const { DataTypes, Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '250397',
  port: 5432,
  logging: false,
  database: 'academloMealsDB',
});

module.exports = { DataTypes, db };
