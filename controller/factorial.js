const validators = require('../validate/factorial');
const factorial = require('../services/factorial');

const getFactorial = async (query) => {
  const { value, error } = validators.factorialValidator.validate(query, { abortEarly: false });
  if (error) {
    return { error: { status: 400, data: error.message } };
  }
  const { error: dbError, result } = await factorial.getFactorial(value);

  if (dbError) return { error: { status: 500, data: dbError } };
  return { result: { data: result, status: 200 } };
};

module.exports = {
  getFactorial,
};
