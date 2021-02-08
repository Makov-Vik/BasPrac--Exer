'use strict';

let array = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Alpachino', phone: '+380890808090' },
    { name: 'Stas Vonatik', phone: '+380883034903' },
    { name: 'Vezde svoiy', phone: '+380899757334' },
];
function findPhoneByName(name){
    return findPhoneByName = array.find(i => i.name == name).phone;
};
console.log(` Number of Alpachino: ${findPhoneByName('Alpachino')}`);

let hash = {
    'Marcus Aurelius': '+380445554433',
    'Alpachino': '+380890808090' ,
    'Stas Vonatik' : '+380883034903' ,
    'Vezde svoiy' : '+380899757334' ,
};
const findPhoneByHash = name =>{
    return hash[name];
};
console.log(`Vezde svoiy number: ${findPhoneByHash('Vezde svoiy')}`);
