// 1. Print Odd Numbers in an Array

// Anonymous Function
const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers([4, 9, 7, 5, 8, 3, 1]);

// Immediately Invoked Function Expressions (IIFE)
(function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([11, 22, 33, 44, 55]);

// Output:
// 9
// 7
// 5
// 3
// 1
// 11
// 33
// 55

// 2. Convert All Strings to Title Caps in a String Array

// Anonymous Function
const toTitleCaps = (arr) => {
  return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(toTitleCaps(['my', 'name', 'is', 'leo nirmalraj']));

// Immediately Invoked Function Expressions (IIFE)
const titleCapsResult = (function (arr) {
  return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(['what', 'is', 'yours']);
console.log(titleCapsResult);

// Output:
// ['My', 'Name', 'Is', 'Leo', 'Nirmalraj']
// ['What', 'Is', 'Yours']

// 3. Sum of All Numbers in an Array

// Anonymous Function
const sumArray = (arr) => {
  return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]);

// Immediately Invoked Function Expressions (IIFE)
const sumResult = (function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
})([1, 2, 3, 4, 5]);
console.log(sumResult);

// Output:
// 15
// 15

// 4. Return All Prime Numbers in an Array

// Anonymous Function
const getPrimes = (arr) => {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};
console.log(getPrimes([2, 3, 4, 5, 6, 7, 8, 9]);

// Immediately Invoked Function Expressions (IIFE)
const primes = (function (arr) {
  return arr.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})([2, 3, 4, 5, 6, 7, 8, 9]);
console.log(primes);

// Output:
// ['2', '3', '5', '7']
// ['2', '3', '5', '7']

// 5. Return All Palindromes in an Array

// Anonymous Function
const getPalindromes = (arr) => {
  return arr.filter((str) => str === str.split('').reverse().join(''));
};
console.log(getPalindromes(['racecar', 'hello', 'level']);

// Immediately Invoked Function Expressions (IIFE)
const palindromes = (function (arr) {
  return arr.filter((str) => str === str.split('').reverse().join(''));
})(['racecar', 'hello', 'level']);
console.log(palindromes);

// Output:
// ['racecar', 'level']
// ['racecar', 'level']

// 6. Return Median of Two Sorted Arrays of the Same Size

// Anonymous Function
const findMedianSortedArrays = (arr1, arr2) => {
  const combined = arr1.concat(arr2).sort((a, b) => a - b);
  const middle = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
    return (combined[middle - 1] + combined[middle]) / 2;
  } else {
    return combined[middle];
  }
};
console.log(findMedianSortedArrays([1, 3], [2, 4]);

// Immediately Invoked Function Expressions (IIFE)
const median = (function (arr1, arr2) {
  const combined = arr1.concat(arr2).sort((a, b) => a - b);
  const middle = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
    return (combined[middle - 1] + combined[middle]) / 2;
  } else {
    return combined[middle];
  }
})([1, 3], [2, 4]);
console.log(median);

// Output:
// 2.5
// 2.5

// 7. Remove Duplicates from an Array

// Anonymous Function
const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// IIFE
const uniqueArray = (function (arr) {
  return Array.from(new Set(arr));
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);

// Output:
// ['1', '2', '3', '4', '5']
// ['1', '2', '3', '4', '5']

// 8. Rotate an Array by k Times

// Anonymous Function
const rotateArray = (arr, k) => {
  const len = arr.length;
  k = k % len;
  return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE
const rotated = (function (arr, k) {
  const len = arr.length;
  k = k % len;
  return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotated);

// Output:
// ['3', '4', '5', '1', '2']
// ['3', '4', '5', '1', '2']
