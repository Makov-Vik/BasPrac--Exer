'use strict';

function fn(){ // переделать эту функцию
    const obj1 = { name: "Rapa"};
    let obj2 = {name: "Gimp"};
    obj1.name = "Sem";
    obj2.name = "Rola";

    obj1.lllll = () => {return {string: 'lalal1'}};
    obj2.llllll2 = () => {return {string: 'lalal2'}};
    return obj1.lllll();
};
console.log(fn());

function createUser(name, city){
    console.dir({name:name, city: city});
};
createUser('Marcus Aurelius', 'Roma');
