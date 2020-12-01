'use strict'

const random = (min,max) =>{
    return Math.floor(Math.random()*(max-min) + min);
}

console.log(random(21, 100));

console.log("");

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let book = [];
    for (let i = 0; i < length; i++){
        let Key = random(0, characters.length);
        book.push(characters[Key]);
    }
    
    return book.join('');
}

const key = generateKey(16, characters);

console.log(key + "\n"); 
