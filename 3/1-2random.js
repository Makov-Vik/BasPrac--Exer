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

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789абвгдеёжзийклмнопртсуфхцшщъыьэюя';
function generateKey(length, characters){
    let result = '';
    for( let i = 0; i <  length; i++){
        let number = Math.floor(Math.random() * (characters.length +1));
        result += characters[number];
    }
    console.log(result);
}
generateKey(25,characters);
