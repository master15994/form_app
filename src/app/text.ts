// function findDuplicates(arr) {
//   //   let hash = {};
//   let temp = [];
//   arr.forEach((item) => {
//     hash[item] = hash[item] ? hash[item] + 1 : 1;
//     if (hash[item] > 1) {
//       temp.push(item);
//     }
//   });
//   console.log(temp);
//   return temp;
// }

// import { max } from 'rxjs';

// // function

// // findDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8]);
// // findDuplicates(["apple", "banana", "orange", "banana", "grape", "orange"]);

// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   str.split("").forEach((item) => {
//     if (vowels.includes(item.toLowerCase())) {
//       count += 1;
//     }
//   });
//   console.log(count);
//   return count;
// }
// countVowels("Hello, World!");
// // Ожидаемый результат: 3

// countVowels("JavaScript");
// // Ожидаемый результат: 3

// countVowels("OpenAI ChatGPT");
// // Ожидаемый результат: 5

// function reverseWords(str) {
//   let words = str.split(" ").reverse().join(" ");
//   console.log(words);
//   return words;
// }

// reverseWords("Hello, World!");
// // Ожидаемый результат: 'World! Hello,'

// reverseWords("JavaScript is awesome");
// // Ожидаемый результат: 'awesome is JavaScript'

// reverseWords("OpenAI ChatGPT");
// // Ожидаемый результат: 'ChatGPT OpenAI'

// function sumArray(numbers: number[]) {
//   let sum = 0;

//   numbers.forEach((num) => {
//     sum += num;
//   });
//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(sumArray(numbers));

// function doubleArray(numbers: number[]) {
//   //   let doubleNumber: number[] = [];
//   //   numbers.forEach((num) => {
//   //     doubleNumber.push(num * 2);
//   //   });
//   //   return doubleNumber;
//   return numbers.map((item) => item * 2);
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(doubleArray(numbers)); // Выводит: [2, 4, 6, 8, 10]

// let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
// let shoppingList = groceries.join(' , ');
// console.log(shoppingList);

// let lastNumber = 10;
// let sum = 0;

// for (let i = 0; i <= lastNumber; i++) {
//   sum += i;
//   console.log(sum);
// }

// let lastNumber = 5;
// let multiplicationResult = 1;

// for (let i = 0; i < lastNumber; i++) {
//   if (i % 2 === 0) {
//     multiplicationResult *= i;
//   }
// }

// let number = 16;
// for (let i = 2; i < number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }
// let liquids = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
// let fruits = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
// let greens = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];

// Выбор посетителя

// let chosenLiquid = 1;
// let chosenFruit = 3;
// let chosenGreen = 2;

// for (let i = 0; i < liquids.length ; i++) {}
// for (let i = 0; i < fruits.length ; i++) {}
// for (let i = 0; i < greens.length ; i++) {}

// let order =
//   'Основа - ' +
//   liquids[chosenLiquid] +
//   ',' +
//   'фрукт -' +
//   fruits[chosenFruit] +
//   ',' +
//   'зелень -' +
//   greens[chosenGreen] +
//   '.';
// console.log(order);

let lengt = 0.55;
let weight = 5;
let fatMass = 0.8;

const arr = [3, 35, 7, 77, 88, 1234, 0, 7, 5];
let max = arr[0];
function findMax(arr: any[]) {
  arr.forEach((num: number) => {
    if (max > num) {
      max = num;
      console.log(max);
    }
  });
}
console.log(findMax(arr));
