'use strict'

function sumfor(...args){
  let a = 0;
  for (let i = 0; i < args.length; i++){
    a += args[i];
  }
  return console.log(a);
}

function sumforof(...args){
  let a = 0;
  for( let i of args){
    a += i;
  }
  return console.log(a);
}

function sumWhile(...args){
  let i = 0, a = 0;
  while(i < args.length){
    a += args[i];
    i++;
  }
  return console.log(a);
}
function sumDoWhile(...args){
  let a = 0, i = 0;
  if( args){
    do{
      a += args[i];
      i++
    }
  while(i < args.length)
  }
  return console.log(a);
}

function sumReduce(...args){
    let a = 0;
    a = args.reduce((x,y) => x +y);
    return console.log(a);
}

const a = sumfor(1, 2, 3) // a === 6
const b = sumforof(0) // b === 0
const c = sumWhile() // c === 0
const d = sumDoWhile(1, -1, 1, 5) // d === 1
const e = sumReduce(10, -1, -1, -1) // e === 7
