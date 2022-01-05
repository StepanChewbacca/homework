const Joi = require('joi');

const idValidator = Joi.object().keys({
  id: Joi.number().integer().min(0).required(),
});

const idPageValidator = Joi.object().keys({
  id: Joi.number().integer().min(0).required(),
  page: Joi.number().positive().integer().min(1)
    .default(1),
  perPage: Joi.number().positive().integer().min(1)
    .default(5),
  name: Joi.string().default(''),
});

const coursePageNameValidator = Joi.object().keys({
  page: Joi.number().positive().integer().min(1)
    .default(1),
  perPage: Joi.number().positive().integer().min(1)
    .default(5),
  name: Joi.string().default(''),
  course_id: Joi.number().integer().min(0).required(),
});

const countCourseValidator = Joi.object().keys({
  course_id: Joi.number().integer().min(0).required(),
  count: Joi.number().integer().min(1).default(100),
});

const namePageValidator = Joi.object().keys({
  page: Joi.number().positive().integer().min(1)
    .default(1),
  perPage: Joi.number().positive().integer().min(1)
    .default(5),
  name: Joi.string().default(''),
});

module.exports = {
  idValidator, idPageValidator, coursePageNameValidator, countCourseValidator, namePageValidator,
};
