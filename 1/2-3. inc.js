'use strict'
function inc1(number){
    return number +1;
}
const a = 5; 
const b = inc1(a); 

console.dir({a , b});


function inc2(obj){
    let a = obj.n;
    delete obj.n;
    obj.new = a;
    return obj
}

let obj = {n: 61};

inc2(obj);
console.dir(obj);
