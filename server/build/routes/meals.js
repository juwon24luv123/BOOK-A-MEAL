

Object.defineProperty(exports, '__esModule', {
  value: true
});

let _express = require('express');

let _express2 = _interopRequireDefault(_express);

let _meals = require('../controllers/meals');

let _meals2 = _interopRequireDefault(_meals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mealsRoute = _express2.default.Router();

mealsRoute.get('/meals', _meals2.default.getMeals);

exports.default = mealsRoute;
