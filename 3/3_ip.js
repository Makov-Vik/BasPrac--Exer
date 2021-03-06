'use strict';

function IP(ipos){
    const answer = ipos
      .split('.')
      .map(x => +x)
      .map((x, i) => x << 8*(3-i))
      .reduce((a,b) => a + b);

 return answer;
}

console.log(IP('127.0.0.1'));
console.log(IP('10.0.0.1'));
console.log(IP('192.168.1.10'));
console.log(IP('165.225.133.150'));
console.log(IP('0.0.0.0'));
console.log(IP('8.8.8.8'));

// "use strict";

// function IP(ip){
//     let a = ip.split('.');
//     for(let i in a){
//         a[i] = (parseInt(a[i], 10));
//     };
    
//     for( let i = 0; i < 3; i++){
//         a[i] = a[i] << 8*(3-i);
//         //console.log(a[i]);
//     };
    
//     let sum =  a.reduce(function(x, y){return  x + y });
//     console.log(sum);
// }
// IP('8.8.8.8');
