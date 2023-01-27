// import models
const Restaurant = require('./Restaurant');
const  Review = require('./Review');
const User = require('./User');

// Review belongsTo Restaurant
Review.belongsTo(Restaurant, {foreignKey: 'restaurant_id'});

// Review belongsTo User
Review.belongsTo(User, {foreignKey: 'user_id'});

// Restaurant has many Review
Restaurant.hasMany(Review, {foreignKey: 'review_id'});

// User has many Review
User.hasMany(Review, {foreignKey: 'review_id'});

module.exports = {
  Restaurant,
  Review,
  User,
};
