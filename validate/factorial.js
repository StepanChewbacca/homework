const Joi = require('joi');

exports.factorialValidator = Joi.object().keys({
  number: Joi.number().integer().min(0).required(),
  type: Joi.string().valid('recursion', 'cycle').required(),
});
