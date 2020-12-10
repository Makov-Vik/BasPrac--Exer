'use strict'

function sumfor(...args){
  let count = 0;
  for (let i = 0; i < args.length; i++){
    count = count + args[i];
  }
  return console.log(count);
}

function sumforof(...args){
  let count = 0;
  let i = 0;
  for (i of args){
    count = count + i;
  }
  return console.log(count);
}


const a = sumfor(1, 2, 3) 
const b = sumforof(0)
