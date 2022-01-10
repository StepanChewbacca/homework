const URL = require('url');
const universityController = require('../controller/universityController');
const factorialController = require('../controller/factorial');
const customError = require('../error/customError');
const routes = require('../constants/routes');

const router = async ({ req, res, body }) => {
  try {
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);
    switch (true) {
      case method === 'POST' && pathname === routes.UNIVERSITY:
        ({ result, error } = await universityController.createUniversity(body));
        break;

      case method === 'GET' && pathname === routes.FACTORIAL:
        ({ result, error } = await factorialController.getFactorial(query));
        break;

      default:
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }
    if (error) {
      res.statusCode = error.status;
      return res.end(JSON.stringify({ error }));
    }
    res.statusCode = result.status;
    res.end(JSON.stringify(result.data));
  } catch (error) {
    if (error instanceof customError) {
      res.statusCode = 520;
      res.end(JSON.stringify({ error: error.message }));
    } else {
      res.statusCode = 500;
      res.end(JSON.stringify(error));
    }
  }
};

module.exports = { router };
