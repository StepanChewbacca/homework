const { createTeacherValidator, getTeachersFromUniversityValidator } = require('../validate/teacherValidator');
const { createTeacher, getTeachersFromUniversity } = require('../database/repositories/teachers');

const createTeacherValidate = async (query) => {
  const { value, error } = createTeacherValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }
  const { error: dbError, result } = await createTeacher(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const getTeachersFromUniversityValidate = async (query) => {
  const { value, error } = getTeachersFromUniversityValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const { error: dbError, result } = await getTeachersFromUniversity(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

module.exports = {
  createTeacherValidate,
  getTeachersFromUniversityValidate,
};
