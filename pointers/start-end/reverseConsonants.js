// Given a string `str`, reverse only all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

// BRUTE FORCE: time: O(4N)  space: O(3N)
function isConsonant(char) {
  const vowels = 'aeiou';
  return !vowels.includes(char.toLowerCase());
}

function reverseConsonants1(str) {  
  const arrOfChars = str.split('');
  const consonantsReversed = arrOfChars.filter(isConsonant).reverse();

  let count = 0;
  let result = '';
  arrOfChars.forEach(char => {
    if (isConsonant(char)) {
      result += consonantsReversed[count];
      count += 1;
    } else {
      result += char;
    }
  })

  return result;
}

// START END:

function isVowel(char) {
  const vowels = 'aeiou';
  return vowels.includes(char.toLowerCase());
}

function reverseConsonants(str) {
  let start = 0;
  let end = str.length - 1;

  let arrOfChars = str.split('');
  while (start < end) {
    if (isVowel(arrOfChars[start])) {
      start += 1;
      continue;
    }

    if (isVowel(arrOfChars[end])) {
      end -= 1;
      continue;
    }

    [arrOfChars[start], arrOfChars[end]] = [arrOfChars[end], arrOfChars[start]];
    start += 1;
    end -= 1;
  }

  return arrOfChars.join('');
}



console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true
