'use strict'

const compute = (a,b) => (a > b ? a: b);

function max(args){
  let res = [];
 
  return (args.map( row => row.reduce(compute)))
  .reduce(compute) ;
}

const m = max([[1, 2, 3], [4, 5, 100], [7, 8, 101]]);
console.log(m);

// 'use strict'

// function max(arg){
//   let max = null;
//   for( let i of arg){
//     for (let j of i){
//       j > max ? max = j : j = j
//     }
//   }
//   return max
// }

// const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// console.log(m); // 9

