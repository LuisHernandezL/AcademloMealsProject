const express = require('express')

const mealsRouter = express.Router()

//utils
const { mealExist } = require('../middlewares/mealExist.middleware')

const {
    createMeal,
    allMeals,
    mealsById,
    updateMeal,
    deletMeal
} = require('../controllers/meals.controllers')

mealsRouter.get('/', allMeals)
mealsRouter.get('/:id', mealsById)

//protected End Points
mealsRouter.post('/:id', createMeal)
mealsRouter.patch('/:id', updateMeal)
mealsRouter.delete('/:id', deletMeal)

module.exports = { mealsRouter }