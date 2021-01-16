'use strict';

const unique = (array) => {
  const set = new Set(array);
  return Array.from(set);
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result);
