"use strict";
//7 exercise
const obj1 = { name: 'Vik',};

let obj2 = { name : 'Vik'};

obj1.name = 'Makoviy';
obj2.name = 'Makoviy';

console.log ('object 1: ' ,obj1, '. object 2: ' , obj2);

obj2['style'] = 'panamera';
console.log('object 2 after : ' , obj2);

//8 exercise

function createUser(name, city){
    let object = {};
    object['name'] = name;
    object['city'] = city;
    console.dir(object);
}

createUser('Viktor', 'Kiev');
