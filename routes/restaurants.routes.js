const express = require('express')

const restaurantRouter = express.Router()

//middleware
const { restaurantExist } = require('../middlewares/restaurantExist.middleware')
const { reviewExist } = require('../middlewares/reviewExist.middleware')
//constrollers
const {newRestaurant,
    allRestaurant,
    restaurantById,
    updateRestaurant,
    deletRestaurant,
    newReviewRestaurant,
    updateReview,
    deleteReview} = require('../controllers/restaurants.controllers')

//end points
//restaurants
restaurantRouter.get('/', allRestaurant)
restaurantRouter.get('/:id', restaurantExist, restaurantById)

restaurantRouter.post('reviews/:restaurantId', newReviewRestaurant)
//protected End points

restaurantRouter.post('/', newRestaurant)
restaurantRouter.patch('/:id', restaurantExist, updateRestaurant)
restaurantRouter.delete('/:id', restaurantExist, deletRestaurant)

//restaurants reviews
restaurantRouter.patch('reviews/:id', reviewExist, updateReview)
restaurantRouter.delete('/reviews/:id', reviewExist, deleteReview)

module.exports = { restaurantRouter }