'use strict';

const contract = (fn, ...types) => (...args) => {
  let type = typeof types[0];
  types.map((x) => {
    if (typeof x != type) {
      type = false;
      return new TypeError();
    }
  });
  if (type !== false) {
    return fn(...args);
  }
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const resstring = concatStrings('Hello ', 'world!');
console.dir(resstring);
