const { studentCourseValidator } = require('../validate/courseValidator');
const {
  deleteStudentFromCourse,
  linkStudentToCourse,
  getStudentFromCourse,
  getCourseById,
} = require('../database/repositories/courses');

const linkStudentToCourseValidate = async (query) => {
  const { value, error } = studentCourseValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const course = await getCourseById(value);
  if (!course.result[0]) {
    return { result: { data: 'Course not found', status: 500 } };
  }

  const { error: dbError, result } = await linkStudentToCourse(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const deleteStudentFromCourseValidate = async (query) => {
  const { value, error } = studentCourseValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const student = await getStudentFromCourse(value);
  if (!student.result[0]) {
    return { result: { data: 'Student on this course not found', status: 500 } };
  }

  const { error: dbError, result } = await deleteStudentFromCourse(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

module.exports = {
  deleteStudentFromCourseValidate,
  linkStudentToCourseValidate,
};
