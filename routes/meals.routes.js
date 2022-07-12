const express = require('express');

const mealsRouter = express.Router();

//Middleware
const { mealExist } = require('../middlewares/mealExist.middleware');
const { protectSession } = require('../middlewares/auth.middleware');
const {
  restaurantExist,
} = require('../middlewares/restaurantExist.middleware');

const {
  createMeal,
  allMeals,
  mealsById,
  updateMeal,
  deletMeal,
} = require('../controllers/meals.controllers');

mealsRouter.get('/', allMeals);
mealsRouter.get('/:id', mealExist, mealsById);

//protected End Points

mealsRouter.use(protectSession);
mealsRouter.post('/:id', restaurantExist, createMeal);
mealsRouter.patch('/:id', mealExist, updateMeal);
mealsRouter.delete('/:id', mealExist, deletMeal);

module.exports = { mealsRouter };
