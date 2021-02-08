'use sctrict'

const obj = new Object({
  name: 'Like',
  age : 25,
  hobby: 'Be'
})

Object.prototype.map = function(fn){
  let myobj = this

  let result = {}
  console.log(this)
  for( let i of Object.keys(myobj)){
    result[i] = (fn(this[i]))
  }
  return console.log(result)
}

obj.map(x => x.toString()+x);


// By @artemkaxdxd

// 'use sctrict'

// let object = { 'a': 1, 'b': 2, 'c': 3 }

// const objMap = (object, callback) =>{
//   return  Object.keys(object).reduce((result, key) =>{
//     result[key] = callback(object[key]);
//     return result
//   },
//   {} )
// }

// let newObject = objMap(object, value => value *2);

// console.log(object);
// console.log(newObject);
