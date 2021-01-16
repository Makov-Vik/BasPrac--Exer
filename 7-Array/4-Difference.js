'use strict';

const difference = (arr1, arr2) => {
  const newArray = []
  arr1.map((x) => { if(arr2.includes(x) === false) newArray.push(x) } );
  return newArray; 
};

const array11 = [7, -2, 10, 5, 0];
const array21 = [0, 10];

const result = difference(array11, array21);
console.log(result);

const array12 = ['Beijing', 'Kiev'];
const array22 = ['Kiev', 'London', 'Baghdad'];
const resultstring = difference(array12, array22);
console.log(resultstring);
