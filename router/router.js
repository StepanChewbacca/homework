const URL = require('url');
const universityController = require('../controller/universityController');
const teacherController = require('../controller/teacherController');
const courseController = require('../controller/courseController');
const studentController = require('../controller/studentController');
const markController = require('../controller/markController');
const studentCourseController = require('../controller/studentСourseController');
const routes = require('../constants/routes')

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);
  switch (true) {
    case method === 'POST' && pathname === routes.UNIVERSITY:
      ({ result, error } = await universityController.createUniversityValidate(body));
      break;

    case method === 'GET' && pathname === routes.UNIVERSITY:
      ({ result, error } = await universityController.getUniversityValidate(query));
      break;

    case method === 'GET' && pathname === routes.UNIVERSITY_LIST:
      ({ result, error } = await universityController.getUniversitiesListValidate(query));
      break;

    case method === 'POST' && pathname === routes.TEACHER:
      {
        ({ result, error } = await teacherController.createTeacherValidate(body));
        break;
      }

    case method === 'GET' && pathname === routes.TEACHER_UNIVERSITY:
      {
        ({ result, error } = await teacherController.getTeachersFromUniversityValidate(query));
        break;
      }

    case method === 'POST' && pathname === routes.COURSE:
      {
        ({ result, error } = await courseController.createCourseValidate(body));
        break;
      }

    case method === 'GET' && pathname === routes.COURSE_LIST:
      {
        ({ result, error } = await courseController.getCoursesFromUniversityValidate(query));
        break;
      }

    case method === 'DELETE' && pathname === routes.COURSE:
      {
        ({ result, error } = await courseController.deleteCourseValidate(query));
        break;
      }

    case method === 'POST' && pathname === routes.STUDENT:
      {
        ({ result, error } = await studentController.createStudentValidate(body));
        break;
      }

    case method === 'DELETE' && pathname === routes.STUDENT:
      {
        ({ result, error } = await studentController.deleteStudentValidate(query));
        break;
      }

    case method === 'GET' && pathname === routes.STUDENT_UNIVERSITY_LIST:
      {
        ({ result, error } = await studentController.getStudentsFromUniversityValidate(query));
        break;
      }

    case method === 'GET' && pathname === routes.STUDENT_COURSE_LIST:
      {
        ({ result, error } = await studentController.getStudentsFromCourseValidate(query));

        break;
      }

    case method === 'GET' && pathname === routes.STUDENT_RATING:
      {
        ({ result, error } = await markController.getStudentsRatingFromCourseValidate(query));

        break;
      }

    case method === 'POST' && pathname === routes.STUDENT_ON_COURSE:
      {
        ({ result, error } = await studentCourseController.linkStudentToCourseValidate(body));

        break;
      }

    case method === 'DELETE' && pathname === routes.STUDENT_ON_COURSE:
      {
        ({ result, error } = await studentCourseController.deleteStudentFromCourseValidate(query));
        break;
      }

    case method === 'POST' && pathname === routes.MARK:
      {
        ({ result, error } = await markController.setMarkValidate(body));
        break;
      }

    case method === 'PUT' && pathname === routes.STUDENT_EDIT:
      {
        ({ result, error } = await studentController.editStudentValidate(body));
        break;
      }

    case method === 'GET' && pathname === routes.UNIVERSITY_STUDENT_RATING:
      {
        ({ result, error } = await universityController.studentsRatingByUniversityValidate(body));
        break;
      }

    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }
  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify(error.data));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };
