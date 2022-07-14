const initModels = () => {
  const { Meals } = require('./meals.model');
  const { Orders } = require('./orders.model');
  const { Restaurants } = require('./restaurants.model');
  const { Reviews } = require('./reviews.model');
  const { Users } = require('./users.model');

  //1Res---M Reviews
  Restaurants.hasMany(Reviews);
  Reviews.belongsTo(Restaurants);

  //1Res--M Meals
  Restaurants.hasMany(Meals);
  Meals.belongsTo(Restaurants);

  //1 User --M Reviews
  Users.hasMany(Reviews);
  Reviews.belongsTo(Users);

  //1 user -- M orders
  Users.hasMany(Orders);
  Orders.belongsTo(Users);

  //1 meal -- 1 orders
  Meals.hasOne(Orders);
  Orders.belongsTo(Meals);
};

module.exports = { initModels };
