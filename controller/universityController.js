const universities = require('../database/repositories/universities');
const validators = require('../validate/universityValidator');

const createUniversity = async (body) => {
  const { value, error } = validators.universityValidator.validate(body, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }
  const { error: dbError, result } = await universities.createUniversity(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

module.exports = {
  createUniversity,
};
