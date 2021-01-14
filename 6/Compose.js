'use strict'

const compose = (...fns) => (x) => {
  const last = fns.length - 1;
  let res = x;
  let errors = {};
  try {
      for( let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
  }
  catch (error) {
      errors[error] = error
  }
  compose.on= () => console.log(errors)
}

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = compose(inc, twice, cube);
// const f = pipe(inc, 7, cube);

console.log(f(5));
//compose.on()
