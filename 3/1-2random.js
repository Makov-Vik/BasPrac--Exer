"use strict";

function random(...arg) {
    let a;
    let b;
    if (arg.length == 1){
        a = 0;
        b = Math.floor(arg[0]);
    }
    else {
        a = Math.ceil(arg[0]);
        b = Math.floor(arg[1]);
    }
    return Math.floor(Math.random()*(b - a +1)) + a;
}
console.log(random(50, 100));
console.log(random(100));

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
