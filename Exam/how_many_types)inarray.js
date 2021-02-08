'use strict';

const arr = [ 1, 2, 3, 4, 5, NaN, NaN, true, true, false, false, 'string', 'string','string']

function howmany(arr){
  let count = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  const res = arr.map(function (i){
    if (typeof i === 'number'){
      count.number ++
    }
    else if (typeof i === 'string'){
      count.string ++;
    }
    else if (typeof i === 'boolean'){
      count.boolean ++;
    }
  })
  return console.log(count)
}

howmany(arr)

// Else
'use strict'

const arr = [true, 'hello', 5,  12, -200, 'fj', 58, 8, 48, 'lalala', false, false, 'word']

let count = {
};

for ( let i of arr){
    if (typeof i === 'number'){
     if( count.hasOwnProperty('number'))  count.number++
        else count.number = 1;
    };
    if (typeof i === 'string'){
        if( count.hasOwnProperty('string'))  count.string++
        else count.string = 1; 
    };
    if (typeof i === 'boolean'){
        if( count.hasOwnProperty('boolean'))  count.boolean++
        else count.boolean = 1;
    };
}
console.log(count);
