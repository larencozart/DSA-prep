/*
Create a recursive function that counts the number of digits in 
a given integer. The function should accept an integer and return 
the count of its digits. For instance, if the input is 12345, the 
function should return 5

Base Case:
- last digit or no digits?

Recursive Def:

Recursive Case:
- reduction: slice the 

*/

// String method
function countDigits(int) {
  let digitStr = String(int);
  return recurseOnStr(digitStr);
}

function recurseOnStr(str) {
  if (str.length === 1) return 1;

  return 1 + recurseOnStr(str.slice(1));
}

// Number method
function countDigits(int) {
  if (int / 10 < 1) return 1;
  return 1 + countDigits(Math.floor(int / 10));
}


console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
// console.log(countDigits(0) === 1);

// All test cases should log true.
