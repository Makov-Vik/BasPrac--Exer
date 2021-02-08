// Posted by Kolya @nikolaichub

'use sctrict'

const string = 'Топот'
const palindrome = isPalindrom(string);

function isPalindrom(string){
  return string.toLowerCase().split('').reverse().join('') === string.toLowerCase()}

console.log(palindrome);
