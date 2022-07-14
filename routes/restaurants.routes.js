const express = require('express');

const restaurantRouter = express.Router();

//middleware
const {
  restaurantExist,
} = require('../middlewares/restaurantExist.middleware');
const { reviewExist } = require('../middlewares/reviewExist.middleware');
const {
  protectSession,
  verifyUserRol,
  verifyUserAccount,
} = require('../middlewares/auth.middleware');

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
const { userExist } = require('../middlewares/userExist.middleware');

//end points
//restaurants
restaurantRouter.get('/', allRestaurant);
restaurantRouter.get('/:id', restaurantExist, restaurantById);

//protected End points

restaurantRouter.use(protectSession);

restaurantRouter.post('/', newRestaurant);

//restaurants reviews
restaurantRouter.post('/reviews/:restaurantId', newReviewRestaurant);
restaurantRouter.patch(
  '/reviews/:id',
  reviewExist,
  verifyUserAccount,
  verifyUserRol,
  updateReview
);
restaurantRouter.delete(
  '/reviews/:id',
  reviewExist,
  verifyUserAccount,
  verifyUserRol,
  deleteReview
);

//Restaurant functions
restaurantRouter
  .use('/:id', restaurantExist)
  .route('/:id')
  .patch(verifyUserAccount, verifyUserRol, updateRestaurant)
  .delete(verifyUserAccount, verifyUserRol, deletRestaurant);

module.exports = { restaurantRouter };
