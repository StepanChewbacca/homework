const Joi = require('joi');

const universityValidator = Joi.object().keys({
  name: Joi.string().min(1).required(),
  country: Joi.string().min(2).required(),
  accreditation: Joi.number().min(1).max(5).required(),
  city: Joi.string().min(2).required(),
});

module.exports = { universityValidator };
