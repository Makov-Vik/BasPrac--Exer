'use strict'

const compute = (a,b) => (a > b ? a: b);

function max(args){
  let res = [];
 
  return (args.map( row => row.reduce(compute)))
  .reduce(compute) ;
}

const m = max([[1, 2, 3], [4, 5, 100], [7, 8, 101]]);
console.log(m);
