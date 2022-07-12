const express = require('express');

const restaurantRouter = express.Router();

//middleware
const {
  restaurantExist,
} = require('../middlewares/restaurantExist.middleware');
const { reviewExist } = require('../middlewares/reviewExist.middleware');
const { protectSession } = require('../middlewares/auth.middleware');

//constrollers
const {
  newRestaurant,
  allRestaurant,
  restaurantById,
  updateRestaurant,
  deletRestaurant,
  newReviewRestaurant,
  updateReview,
  deleteReview,
} = require('../controllers/restaurants.controllers');

//end points
//restaurants
restaurantRouter.get('/', allRestaurant);
restaurantRouter.get('/:id', restaurantExist, restaurantById);

//protected End points

restaurantRouter.use(protectSession);

restaurantRouter.post('/', newRestaurant);

//restaurants reviews
restaurantRouter.post('/reviews/:restaurantId', newReviewRestaurant);
restaurantRouter.patch('/reviews/:id', reviewExist, updateReview);
restaurantRouter.delete('/reviews/:id', reviewExist, deleteReview);

//Restaurant functions
restaurantRouter
  .use('/:id', restaurantExist)
  .route('/:id')
  .patch(updateRestaurant)
  .delete(deletRestaurant);

module.exports = { restaurantRouter };
