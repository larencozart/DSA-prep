/*
Implement a recursive function that reverses a given string. 
The function should take a string as input and return its reverse. 
For example, if the input is "hello", the function should return 
"olleh". Solve the problem using recursion.

Base case:
- The "end" of the string => 1 char (less than two)

Recursive Def:
- A string is reversed if last char is the first char, and
the rest of the string is reversed

Recursive Case:
- recurse on string without the end
- return end + string

The recursive definition for this problem can be defined as follows: 
Take the first character of str and append it to the reverse of the 
remainder of str.
*/

function reverseString(str) {
  if (str.length < 2) return str;

  return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.