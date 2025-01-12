/*
https://leetcode.com/problems/longest-common-subsequence/description/

Given two strings text1 and text2, return the length of their longest 
common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original 
string with some characters (can be none) deleted without changing the 
relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to 
both strings.

Example 1:
  Input: text1 = "abcde", text2 = "ace" 
  Output: 3  
  Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
  Input: text1 = "abc", text2 = "abc"
  Output: 3
  Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
  Input: text1 = "abc", text2 = "def"
  Output: 0
  Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
*/

// Brute Force Recursion
function lcs(text1, text2) {
  // base case: when either string length is 0 return o
  if (text1.length === 0 || text2.length === 0) return 0;

  // recursive case:
  // 1. if last chars match 
  // => return 1 + recurse on shorter substring
  if (text1[text1.length - 1] === text2[text2.length - 1]) {
    return 1 + lcs(text1.slice(0, -1), text2.slice(0, -1));
  } else {
    return Math.max(lcs(text1.slice(0, -1), text2), lcs(text1, text2.slice(0, -1)));
  }
  // 2. if last chars don't match
  // => return max val between (short first, keep second same)
  //                        &  (keep first same, short second)

}

// DP + recursion
function lcs(text1, text2) {
  
}

// Jim
// var longestCommonSubsequence = function(text1, text2) {
//   let memo = [];

//   for (let i = 0; i < text1.length; i++) {
//       memo.push(Array(text2.length).fill(false));
//   }
//   function helper(i, j) {
//       if (i < 0 || j < 0) return 0;


//       if (memo[i][j] !== false) return memo[i][j];
//       let maxSub = 0;
//       if (text1[i] === text2[j]) {
//           maxSub = 1 + helper(i - 1, j - 1);
//       } else {
//           maxSub = Math.max(helper(i - 1, j), helper(i, j - 1));
//       }

//       memo[i][j] = maxSub;
//       return maxSub;
//   }

//   return helper(text1.length - 1, text2.length - 1);
// };


/*
recursive definition:
  a subsequence is the longest common subseq if 

*/

console.log(lcs("larencozart", "lauren")); // 5
console.log(lcs("abcde", "ace")); // 3 => ace
console.log(lcs("abc", "abc")); // 3 => abc
console.log(lcs("abc", "def")); // 0
console.log(lcs("aab", "azb")); // 2 => az
