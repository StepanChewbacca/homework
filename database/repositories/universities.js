const customError = require('../../error/customError');
const pgClient = require('../database');

const createUniversity = async (body) => {
  const {
    country, city, name, accreditation,
  } = body;
  try {
    const university = await pgClient.query(`INSERT INTO unisssversities (country, city, name, accreditation)
      VALUES ('${country}', '${city}', '${name}', ${accreditation} ) RETURNING *`);
    return { result: university.rows[0] };
  } catch (e) {
    throw new customError('Can`t create university');
  }
};

module.exports = { createUniversity };
