const { setMarkValidator } = require('../validate/markValidator');
const { countCourseValidator } = require('../validate/queryValidators');
const { getStudentsRatingFromCourse, setMark } = require('../database/repositories/marks');
const { getStudentFromCourse, getCourseById } = require('../database/repositories/courses');
const { formatRating } = require('../helpers/formatResults');

const setMarkValidate = async (query) => {
  const { value, error } = setMarkValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const student = await getStudentFromCourse(value);
  if (!student.result[0]) {
    return { result: { data: 'Student on this course not found', status: 500 } };
  }

  const { error: dbError, result } = await setMark(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const getStudentsRatingFromCourseValidate = async (query) => {
  const { value, error } = countCourseValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const course = await getCourseById(value);
  if (!course.result[0]) {
    return { result: { data: 'Course not found', status: 500 } };
  }

  const { error: dbError, result } = await getStudentsRatingFromCourse(value);
  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: formatRating(result), status: 200 } };
};

module.exports = {
  getStudentsRatingFromCourseValidate,
  setMarkValidate,
};
