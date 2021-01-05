'use strict';

const obj = {
    super : 'lalal',
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    },
  }

let count = {};
for( let i in obj){
    if( typeof obj[i] === 'function'){
    count[i] = obj[i].length };
};
console.log(count);
