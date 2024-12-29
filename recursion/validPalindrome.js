// Given a string, determine whether it is a valid palindrome or not.

// A palindrome string is a string that reads the same backwards as forwards.

// You may assume that the input will be in lowercase, containing
// valid English alphabet characters without white spaces.

// Input: "madam"
// Output: true

// Input: "abcbea"
// Output: false

/*
Base Case:
- when can we determine that a string is a palindrome?
=> when we have an empty string (a string with no characters) 
   or a string with only one character. In both cases, we can easily 
   determine that it is a valid palindrome and return true

Recursive Definition:
=> A string is a valid palindrome if the first and last chars are 
   the same, and the rest of the string is a valid palindrome.


=> if first + last are the same 
=> then recurse with a slice at 2nd to 2nd to last

madam
5 > 2, true, => ada

ada
3 > 2, true, => d

d
1 < 2 => true

ada: true
madam: true

*/

function isvalidPalindrome(str) {
  // Base Case => stop calling recursive case
  if (str.length < 2) return true; // return a value?

  // Recursive Case
  if (str[0] === str[str.length - 1]) {
    return isvalidPalindrome(str.slice(1, str.length - 1)); // will be true at the end
  } else {
    return false;
  }
}

console.log(isvalidPalindrome("madam")); // true
console.log(isvalidPalindrome("kayak")); // true
console.log(isvalidPalindrome("abcbea")); // false


// LS Solution with pointers
function isValidPalindrome1(str) {
  return isValidPalindromeHelper(str, 0, str.length - 1);
}

function isValidPalindromeHelper(str, start, end) {
  if (end <= start) return true; // we are at the middle of the string now

  return (
    str[start] === str[end] && isValidPalindromeHelper(str, start + 1, end - 1)
  );
}