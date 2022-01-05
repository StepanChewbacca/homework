const {
  createUniversity, getUniversity, getUniversityList, studentsRatingByUniversity,
} = require('../database/repositories/universities');
const { universityValidator } = require('../validate/universityValidator');
const { idValidator, namePageValidator } = require('../validate/queryValidators');
const { formatUniversityStudentsRating } = require('../helpers/formatResults');

const createUniversityValidate = async (body) => {
  const { value, error } = universityValidator.validate(body, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }
  const { error: dbError, result } = await createUniversity(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};
const getUniversityValidate = async (query) => {
  const { value, error } = idValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const { error: dbError, result } = await getUniversity(value.id);

  if (!result[0]) {
    return { result: { data: 'University not found', status: 500 } };
  }

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const getUniversitiesListValidate = async (query) => {
  const { value, error } = namePageValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }

  const { error: dbError, result } = await getUniversityList(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

const studentsRatingByUniversityValidate = async () => {
  const { error: dbError, result } = await studentsRatingByUniversity();

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: formatUniversityStudentsRating(result), status: 200 } };
};

module.exports = {
  createUniversityValidate,
  getUniversityValidate,
  getUniversitiesListValidate,
  studentsRatingByUniversityValidate,
};
