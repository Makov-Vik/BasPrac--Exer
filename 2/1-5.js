let name = "Viktor";
let date = 2002;
function greeting(name){
    console.log(" Hi, " + name);
};
greeting("Viktor");

function range(start , end){ // All elements of array
     let array = [];
     for (start; start<=end; start++){
         array.push(start);
     }
     console.log({range: array});
 }
range(15, 30);

function rangeOdd(start, end){
    let array = [];
    for (start; start<=end; start++){
        array.push(start);
    };
console.log({rangeOdd: array.filter(x => (x % 2)) });
};


// function rangeOdd(start, end){
//     let array = [];
//     for (start; start<=end; start++){
//         if (start % 2 !=0){
//             array.push(start);
//         };
//     };
//     console.dir({rangeOdd: array});
// }
rangeOdd(15, 30);
