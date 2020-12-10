'use strict'

function sumFor(...args){
  let count = 0;
  for (let i = 0; i < args.length; i++){
    count = count + args[i];
  }
  return console.log(count);
}

function sumForOf(...args){
  let count = 0;
  let i = 0;
  for (i of args){
    count = count + i;
  }
  return console.log(count);
}

function sumWhile(...args){
  let i = 0;
  let count = 0;
  while(i < args.length){
    count = count + args[i];
    i++;
  }
  return console.log(count);
}

function sumDoWhile(...args){
  let i = 0;
  let count = 0;
  do {
    if (args.length>0){
      count = count + args[i];
      i++;}
  } while (i < args.length);
  return console.log(count);
}

function sumPrototype(...args){
  let count = 0;
  args.forEach(x => count += x)
  return console.log(count);
}
const a = sumFor(1, 2, 3) 
const b = sumForOf(0)
const c = sumWhile(-1, 5) 
const d = sumDoWhile() 
const e = sumPrototype(10, -1, -1, -1) 
