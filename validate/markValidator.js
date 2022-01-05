const Joi = require('joi');

const setMarkValidator = Joi.object().keys({
  student_id: Joi.number().positive().integer().required(),
  course_id: Joi.number().positive().integer().required(),
  mark: Joi.number().min(1).max(100).integer()
    .required(),
});

module.exports = { setMarkValidator };
