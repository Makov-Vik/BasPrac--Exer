'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
const arraystring = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
const removeElement = (array, item) => {
  const index = array.indexOf(item);
  index != -1 ? array.splice(index, 1) : 0
  return array;
};

removeElement(array, 5);
console.log(array);

removeElement(arraystring, 'Lima');
removeElement(arraystring, 'Berlin');
console.log(arraystring);
