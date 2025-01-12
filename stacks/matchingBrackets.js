// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/*
data structure:


algo:
- if string is empty return true;
- declare consts of pairs of bracket types (3) => map? => obj?
- declare bracketType = null
- declare stack set to 0
- iterate through string

    - if char is a parenthesis
        if char is open parenthesis
          => increment stack by 1
        if char is closed parens
          => decrement by 1

      set bracketType to "parens"

    - if char is a square bracket
      set bracketType to "square"

    - if char is a curly brace
      set bracketType to "curly"

    // if bracket type changed and stack is not 0, return false

- return true if all stacks clear
*/


function areMatched(brackets) {
  if (!brackets) return true;

  const stack = [];
  const matches = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
  }


  for (let i = 0; i < brackets.length; i += 1) {
    let currBracket = brackets[i];

    if ("([{".includes(currBracket)) {       // if bracket is open
      stack.push(currBracket);
    } else {                                 // bracket must be closed 
      if (stack.length === 0) return false;
      let openBracket = stack.pop();
      if (matches[openBracket] !== currBracket) return false;
    }
  }

  return stack.length === 0;
}



console.log(areMatched("()"));              // Output: true
console.log(areMatched(")("));              // Output: false
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false