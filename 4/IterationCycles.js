'use strict'

function ages(persons){
  let age = {};
  for( let i in persons){
    age[i] = persons[i].died - persons[i].born;
  }
  return age 
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));

// 'use strict'

// const persons = {
//   lenin: { born: 1870, died: 1924 },
//   mao: { born: 1893, died: 1976 },
//   gandhi: { born: 1869, died: 1948 },
//   hirohito: { born: 1901, died: 1989 },
// };

// let res = {};
// function ages(){
//   for (let i in persons){
//     let k = 0;
//     let a = 1;
//     for ( let j in persons[i]){
//       a = -1*a;
//       k = k + persons[i][j]*a; 
//     }
//     res[i] = k;
//   }
//   console.log(res);
// };

// ages(persons);

