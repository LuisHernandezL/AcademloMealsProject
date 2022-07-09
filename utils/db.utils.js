const { DataTypes, Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'juan',
  port: 5432,
  logging: false,
  database: 'academloMealsDB',
});

module.exports = { DataTypes, db };
