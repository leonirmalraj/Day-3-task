// 1. Print Odd Numbers in an Array

const printOddNumbers = (arr) => {
  // Use the forEach method to iterate over the array
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([4, 9, 7, 5, 8, 3, 1]);

// Output:
// 9
// 7
// 5
// 3
// 1

// 2. Convert All Strings to Title Caps in a String Array

const convertToTitleCaps = (strArray) => {
  // Use map to transform each string
  return strArray.map((str) => {
    return str
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  });
};

const strings = ["hello world", "goodbye cruel world", "programming is fun"];
const titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings);

// Output:
// [ 'Hello World', 'Goodbye Cruel World', 'Programming Is Fun' ]

// 3. Sum of All Numbers in an Array

const sumArray = (arr) => {
  // Use reduce to calculate the sum
  return arr.reduce((acc, num) => acc + num, 0);
};

const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);

// Output:
// 15

// 4. Return All Prime Numbers in an Array

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeNumbers = (arr) => {
  // Use filter to get prime numbers
  return arr.filter((num) => isPrime(num));
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);

// Output:
// ['2', '3', '5', '7']

// 5. Return All Palindromes in an Array

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const getPalindromes = (arr) => {
  // Use filter to get palindromes
  return arr.filter((str) => isPalindrome(str));
};

const strings = ["radar", "hello", "level", "world", "deified"];
const palindromes = getPalindromes(strings);
console.log(palindromes);

// Output:
// ["radar", "level", "deified"]
