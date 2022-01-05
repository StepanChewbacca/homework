const Joi = require('joi');

const createStudentValidator = Joi.object().keys({
  first_name: Joi.string().alphanum().min(2).required(),
  last_name: Joi.string().alphanum().min(2).required(),
  age: Joi.number().positive().integer().required(),
  university_id: Joi.number().positive().integer().required(),
});

const deleteStudentValidator = Joi.object().keys({
  id: Joi.number().integer().min(0).required(),
});

const editStudentValidator = Joi.object().keys({
  id: Joi.number().positive().integer().required(),
  first_name: Joi.string().alphanum().min(2),
  last_name: Joi.string().alphanum().min(2),
  age: Joi.number().positive().integer(),
});

module.exports = { createStudentValidator, deleteStudentValidator, editStudentValidator };
