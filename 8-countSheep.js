// WPU Coding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// var countSheep = function (num) {
//   //your code here
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += i + ' sheep...';
//   }
//   return result;
// };

// s

// var countSheep = function (num) {
//   return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');
// };

const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3));
