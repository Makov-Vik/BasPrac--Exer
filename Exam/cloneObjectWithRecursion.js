'use strict'

let  obj = { a: 1, b: 2, c:3, Sameone:{ age: 24, name: 'Sameone'} }


//let cloneobj = JSON.parse((JSON.stringify(obj)))


function cloneWithRecursion(obj){
  let newObj = {}
  for( let i in obj){
    if (typeof i == 'object'){
      cloneWithRecursion(obj[i])
    }
    else newObj[i] = obj[i]
  }
  return newObj
}


const cloneObj = cloneWithRecursion(obj)

console.log(obj)
cloneObj.Sameone.age = 69
console.log(cloneObj)
