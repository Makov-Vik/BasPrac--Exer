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
