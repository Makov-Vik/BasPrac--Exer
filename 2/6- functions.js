"use strict";

function averege(a,b){
    return ((a+b) / 2);
};

function square(a){
    return (a*a);
};

function cube(a){
    return (a*a*a);
};

function calculate(){
    let array = [];
    for (let i = 0; i <= 9; i++){
        array.push(averege(square(i), cube(i)));
    };
    return array;
};
console.log(calculate());
