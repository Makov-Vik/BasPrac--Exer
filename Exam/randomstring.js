'use strict'

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomstring(str){
  let newstr = ''
  let lengthranstring = Math.floor(Math.random()*(str.length + 1))

  for( let i = 0; i < lengthranstring; i++){
    newstr += str[Math.floor(Math.random()*(str.length))] 
  }
  return console.log(newstr)
}

for (let i = 0; i < 10; i++) randomstring(str)
