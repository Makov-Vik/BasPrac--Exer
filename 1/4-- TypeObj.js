const different = ['Earth', 3 , true, 911 , false , 'Banana', 10000, true, "node", "Sun", 123]
let obj = { number:0, string: 0, boolean:0  }
for (i of different){
    if (typeof i === 'number'){
        obj.number++;
    }
    if (typeof i === 'string'){
        obj.string++;
    }
    if (typeof i === 'boolean'){
        obj.boolean++;
    }
}
console.warn({obj});
