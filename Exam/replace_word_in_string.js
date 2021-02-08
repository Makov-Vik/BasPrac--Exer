// Цith the help of @gapiyka

'use strict';

function transform(str, strsearch, strchange){
  if( typeof str !='string' || typeof strsearch !='string' || typeof strchange !='string'){
    console.log('Element must be string')
  }
  else if(str.indexOf(strsearch ) != -1){ 
    str = str.replace(strsearch, strchange);
    return console.log(str)
  }
  else console.log(' There is no this string: ', strsearch)
}

let examle = 'Седьмое восхождение в океан '
let strsearch = 'океан'
let strchange = 'море'
transform(examle, strsearch, strchange)
