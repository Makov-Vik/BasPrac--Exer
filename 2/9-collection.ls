"use strict";

let obj = [];

obj[0] = { name: 'Marcus Aurelius',      phone: '+380445554433' };
obj[1] = { name: 'Stanislav Batrinskiy', phone: '+999999999999' };
obj[2] = { name: 'Orac Anatiello',       phone: '+888888888888' };

function findname(name){
    console.log('name of ', name, ' is ', obj.find(x => x.name === name).phone)
}

findname('Orac Anatiello');

let hash = {
    'Marcus Aurelius':      '+380445554433' ,
    'Stanislav Batrinskiy': '+999999999999' ,
    'Orac Anatiello':       '+888888888888' ,   
}

console.log('Seach in hash Marcus Aurelius number: ', hash['Marcus Aurelius'])
