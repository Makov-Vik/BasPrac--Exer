'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
const arraystring = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

const removeElements = (arr, ...items) => {
  for(let i of items) {
    if(arr.includes(i)) {
      arr.splice(arr.indexOf(i), 1);
      };
  };
  return arr;
};

removeElements(array, 5, 1, 6);
console.log(array);

removeElements(arraystring, 'Lima', 'Berlin', 'Kiev');
console.log(arraystring);
