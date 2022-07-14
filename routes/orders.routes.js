const express = require('express');

const ordersRouter = express.Router();

//controllers
const {
  createAOrder,
  getAllOrders,
  editOrderStatus,
  cancelOrder,
} = require('../controllers/orders.controllers');
//middlewares
const { protectSession } = require('../middlewares/auth.middleware');

//endpoints

ordersRouter.use(protectSession);

ordersRouter.post('/', createAOrder);
ordersRouter.get('/me', getAllOrders);
ordersRouter.route('/:id').patch(editOrderStatus).delete(cancelOrder);

module.exports = { ordersRouter };
