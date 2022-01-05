const { createStudentValidator, deleteStudentValidator, editStudentValidator } = require('../validate/studentsValidator');
const { idPageValidator, coursePageNameValidator } = require('../validate/queryValidators');
const {
  createStudent,
  deleteStudent,
  getStudentsFromUniversity,
  editStudent,
  getStudent,
  getStudentsFromCourse,
} = require('../database/repositories/student');
const {
  getUniversity,
} = require('../database/repositories/universities');
const { getCourseById } = require('../database/repositories/courses');

const createStudentValidate = async (query) => {
  const { value, error } = createStudentValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }
  const { error: dbError, result } = await createStudent(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const deleteStudentValidate = async (query) => {
  const { value, error } = deleteStudentValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const student = await getStudent(value);
  if (!student.result[0]) {
    return { result: { data: 'Student not found', status: 500 } };
  }

  const { error: dbError, result } = await deleteStudent(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const getStudentsFromUniversityValidate = async (query) => {
  const { value, error } = idPageValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const university = await getUniversity(value.id);
  if (!university.result[0]) {
    return { result: { data: 'University not found', status: 500 } };
  }

  const { error: dbError, result } = await getStudentsFromUniversity(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const getStudentsFromCourseValidate = async (query) => {
  const { value, error } = coursePageNameValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const course = await getCourseById(value);
  if (!course.result[0]) {
    return { result: { data: 'Course not found', status: 500 } };
  }

  const { error: dbError, result } = await getStudentsFromCourse(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const editStudentValidate = async (query) => {
  const { value, error } = editStudentValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const student = await getStudent(value);
  if (!student) {
    return { result: { data: 'Student not found', status: 500 } };
  }

  const { error: dbError, result } = await editStudent(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

module.exports = {
  createStudentValidate,
  deleteStudentValidate,
  getStudentsFromUniversityValidate,
  editStudentValidate,
  getStudentsFromCourseValidate,
};
