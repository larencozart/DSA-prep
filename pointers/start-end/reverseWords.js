// You are given a sentence represented by a string str. 
// Your objective is to reverse all the characters in each word of 
// the sentence while ensuring that the case of each character 
// remains unchanged. The spaces between words should be preserved as 
// they are, and the overall order of the words in the sentence must not 
// be altered.

// You should solve the problem without using the Array#reverse method.

// BRUTE FORCE: time O(N)
function reverseWord1(word) {
  let result = '';
  for (let idx = word.length - 1; idx >= 0; idx -= 1) {
    let currChar = word[idx];
    result += currChar;
  }

  return result;
}

// TWO POINTERS
function reverseWord(str) {
  let wordArr = word.split("");

  let start = 0;
  let end = wordArr.length - 1;

  while (start < end) {
    [wordArr[start], wordArr[end]] = [wordArr[end], wordArr[start]];
    start++;
    end--;
  }

  return wordArr.join("");
}

// My final function was the same as LS
function reverseWords1(str) {
  return str.split(' ').map(reverseWord).join(' ');
}



// Example test cases:

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");