'use strinct';

function ifFunction(x) {
  if (typeof x !== 'function') {
    return true;
  }
}

const pipe = (...fns) => (x) => {
  if (fns.some(ifFunction)) {
    throw new TypeError('At least one non-functional element');
  }
  return fns.reduce((a, b) => b(a), x);
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, cube);

console.log(f(5));
