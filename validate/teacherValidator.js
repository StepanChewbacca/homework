const Joi = require('joi');

const createTeacherValidator = Joi.object().keys({
  first_name: Joi.string().alphanum().min(2).required(),
  last_name: Joi.string().alphanum().min(2).required(),
  age: Joi.number().positive().integer().required(),
  university_id: Joi.number().positive().integer().required(),
});

const getTeachersFromUniversityValidator = Joi.object().keys({
  university_id: Joi.number().positive().integer().required(),
  page: Joi.number().positive().integer().min(1)
    .default(1),
  perPage: Joi.number().positive().integer().min(1)
    .default(10),
  name: Joi.string().min(2).default(''),
});

module.exports = { createTeacherValidator, getTeachersFromUniversityValidator };
