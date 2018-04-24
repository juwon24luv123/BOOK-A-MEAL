'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _meals = require('../.data/meals');

var _meals2 = _interopRequireDefault(_meals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @exports
 * @class Meals
 * @classdesc uidiiod
 */
var Meals = function () {
  function Meals() {
    _classCallCheck(this, Meals);
  }

  _createClass(Meals, null, [{
    key: 'getMeals',

    /**
     * @method getMeals
     * @param {object} req
     * @param {object} res
     * @returns {array} Returns a lists of Meals
    */
    value: function getMeals(req, res) {
      res.send({
        meals: _meals2.default
      });
    }
  }]);

  return Meals;
}();

exports.default = Meals;