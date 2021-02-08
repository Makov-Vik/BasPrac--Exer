'use strict'

const arr = [1, 2, 3, 4, 5, 6]

function shuffle(array){

  let index 
  let newArray = []

  function random(){
    index = Math.floor(Math.random()*(array.length))
    return index
  }
  
  for( let i = 0; i < array.length; i++){
    random()
    while( newArray.includes(array[index])){
      random()
    }
    newArray.push(arr[index])
  }

  return console.log(newArray)
}
console.log(arr)
for(let i = 0; i < 5; i++) console.log(shuffle(arr))

//================================================== second way

// console.log(arr, ' - Original array')
// for(let i = 0; i < 5; i++) shuffle(arr)

// function shuffle(array) {//Fisher–Yates shuffle 
//   let rand, temp;
//   for (let i = array.length - 1; i > 0; i--) {
//       rand = Math.floor(Math.random() * (i + 1));
//       temp = array[i];
//       array[i] = array[rand];
//       array[rand] = temp;
//   }
//   return array;
// }

// console.log(arr)
// for(let i = 0; i < 5; i++) console.log(shuffle(arr))

//================================================= third way

// function shuffle2(array) {//true FISHER algorithm (but with creating array)(solo-made)
//   function random(min, max){
//       return Math.floor(Math.random() * (max - min) + min)
//   }
//   let rand, newArray = [];
//   while(array.length > 0){
//       rand = random(0, array.length);
//       newArray.push(array[rand]);
//       array.splice(rand, 1);
//   }
//   return newArray;
// }
