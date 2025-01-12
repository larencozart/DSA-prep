/*
https://leetcode.com/problems/basic-calculator-ii/

Given a string s which represents an expression, evaluate this expression and 
return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results 
will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as 
mathematical expressions, such as eval().

 

Example 1:
  Input: s = "3+2*2"
  Output: 7

Example 2:
  Input: s = " 3/2 "
  Output: 1

Example 3:
  Input: s = " 3+5 / 2 "
  Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.



rules:
- ignore whitespace
- i need to use a stack

- when to push to stack => + -
- when to pop off => * /
*/

// one way
function calculate(str) {
  str = str.replace(/\s/g, "");
  const stack = [];
  let currNum = 0;
  let currOperation = '+';

  for (let idx = 0; idx < str.length; idx += 1) {
    // what if char is digit (not an operation
    let currChar = str[idx];
    if (!isNaN(currChar)) {
      currNum = currNum * 10 + Number(currChar);
    }

    // what if char is operator
    if (isNaN(currChar) || idx === str.length - 1) {
      let prevNum;
      switch (currOperation) {
        case '+':
          stack.push(currNum);
          break;
        case '-':
          stack.push(-currNum);
          break;
        case '*':
          prevNum = stack.pop();
          stack.push(prevNum * currNum);
          break;
        case '/':
          prevNum = stack.pop();
          stack.push(Math.trunc(prevNum / currNum))
          break;
        default:
          console.log("error occurred");
      }

      currOperation = currChar;
      currNum = 0;
    }
  }

  return stack.reduce((accum, el) => accum + el);

}

// srdjan
const calculate = (s) => {
  const updateStack = (stack, number, op) => {
      if (op === "+") {
          stack.push(number);
      } else if (op === "-") {
          stack.push(-number);
      } else if (op === "*") {
          const last = stack.pop();
          stack.push(last * number);
      } else {
          const last = stack.pop();
          stack.push(Math.trunc(last / number));
      }
      return stack;
  };

  let stack = [];
  let currentNum = "";
  let op = "+";

  for (const c of s) {
      if (c >= "0" && c <= "9") {
          currentNum += c;
      } else if ("+-*/".includes(c)) {
          const number = parseInt(currentNum);
          stack = updateStack(stack, number, op);
          currentNum = "";
          op = c;
      }
  }

  stack = updateStack(stack, parseInt(currentNum), op);
  return stack.reduce((sum, num) => sum + num, 0);
};

// WALK THROUGH with SRDJAN
/*
trick 1: handling multiple digit nums
trick 2: handling the last num

*/
function calculate(str) {
  str += "+";
  const stack = [];
  let num = "";
  let operation = '+';

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    // if char is a digit string
    if (!isNaN(char) && char !== " ") {
      num += char;
    }

    if (isNaN(char) && char !== " ") {
      switch (operation) {
        case "+":
          stack.push(+num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * +num)
          break;
        case "/":
          stack.push(Math.trunc(stack.pop() / +num));
          break;
        default:
          console.log("Encountered an error");
      }

      currNum = "";
      operation = char;
    }
  }

  return stack.reduce((accum, el) => accum + el);

}

console.log(calculate("3+2*2")); // 7
console.log(calculate( " 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5
console.log(calculate("3*2 - 1 + 40/2")); // 