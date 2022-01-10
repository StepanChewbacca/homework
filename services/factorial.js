const { performance } = require('perf_hooks');

const getFactorial = async ({ type, number }) => {
  switch (true) {
    case type === 'cycle': {
      let timeLoop = performance.now();
      const factorial = getFactorialCycle(number);
      timeLoop = performance.now() - timeLoop;
      return { result: { data: { timeLoop, factorial } } };
    }

    case type === 'recursion': {
      let timeLoop = performance.now();
      const factorial = getFactorialRecursion(number);
      timeLoop = performance.now() - timeLoop;
      return { result: { data: { timeLoop, factorial } } };
    }

    default: {
      return { error: { data: 'Algorithm is not found!', status: 404 } };
    }
  }
};

function getFactorialCycle(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function getFactorialRecursion(num) {
  return num !== 1 ? num * getFactorialRecursion(num - 1) : 1;
}

module.exports = { getFactorial };
