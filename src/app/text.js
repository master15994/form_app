function findDuplicates(arr) {
  //   let hash = {};
  let temp = [];
  arr.forEach((item) => {
    hash[item] = hash[item] ? hash[item] + 1 : 1;
    if (hash[item] > 1) {
      temp.push(item);
    }
  });
  console.log(temp);
  return temp;
}

// function

// findDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8]);
// findDuplicates(["apple", "banana", "orange", "banana", "grape", "orange"]);

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").forEach((item) => {
    if (vowels.includes(item.toLowerCase())) {
      count += 1;
    }
  });
  console.log(count);
  return count;
}
countVowels("Hello, World!");
// Ожидаемый результат: 3

countVowels("JavaScript");
// Ожидаемый результат: 3

countVowels("OpenAI ChatGPT");
// Ожидаемый результат: 4
