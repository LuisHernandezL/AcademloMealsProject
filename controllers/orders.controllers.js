//models
const { Orders } = require('../models/orders.model');
const { Meals } = require('../models/meals.model');
//utils
const { catchAsync } = require('../utils/catchAsync.utils');
const { AppError } = require('../utils/appError.utils');

//functions

const createAOrder = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { mealId, quantity } = req.body;

  const meal = await Meals.findOne({ where: { id: mealId } });

  if (!meal) {
    return next(new AppError('Meal not found', 403));
  }

  const totalPrice = meal.price * quantity;

  const order = await Orders.create({
    mealId,
    userId: sessionUser.id,
    totalPrice,
    quantity,
  });

  res.status(200).json({
    status: 'success',
    order,
  });
});
const getAllOrders = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const meal = await Meals.findAll({
    where: { userId: sessionUser.id, status: 'active' },
  });

  if (!meal) {
    return new AppError('You dont have active orders', 400);
  }

  res.status(200).json({
    status: 'success',
    meal,
  });
});
const editOrderStatus = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const orders = await Orders.findAll({
    where: { userId: sessionUser.id, status: 'active' },
  });

  if (!orders) {
    return new AppError('you dont have pending orders', 400);
  }

  await orders.update({ status: 'completed' });

  res.status(200).json({
    status: 'success',
    message: 'order completed',
  });
});
const cancelOrder = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const orders = await Orders.findAll({
    where: { userId: sessionUser.id, status: 'active' },
  });

  if (!orders) {
    return new AppError('you dont have pending orders', 400);
  }

  await orders.update({ status: 'cancelled' });

  res.status(200).json({
    status: 'success',
    message: 'order cancelled',
  });
});

module.exports = { createAOrder, getAllOrders, editOrderStatus, cancelOrder };
