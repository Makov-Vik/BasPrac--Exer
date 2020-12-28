'use strict'

const seq = fn => otherfn => 
    (typeof(otherfn) === 'number') ? fn(otherfn)
    : seq(x => fn(otherfn(x)))
;
console.log(seq(x => x + 7)
   (x => x * 2)(5));

