/*
https://leetcode.com/problems/palindrome-partitioning/description/

Given a string s, partition s such that every 
substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.



Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.

*/


function partition(s) {
  function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
      if (s[start] !== s[end]) return false;

      start += 1;
      end -= 1;
    }

    return true;
  }

  function backtrack(s, candidate, result, position) {
    if (position === s.length) { /* <<success condition>> */
      result.push([...candidate]); // make sure to create a copy
      return;
    }

    for (let i = position; i < s.length; i += 1) {
      const substring = s.slice(position, i + 1);

      if (!isPalindrome(substring)) continue;

      candidate.push(substring);  // take
      backtrack(s, candidate, result, i + 1);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(s, candidate, result, 0);
  return result;
}

/*
1. s = "abc"
["abc"]
candidate = ["a"]

2. s = "bc"
canidate = ["a", "b"]

3. s = "c"

candidate = ["a", "b", "c"]


*/



// "abad" ["a", "b", "a", "d"], ["a", "ba", "d"], ["a", "b", "ad"], 
//        ["a", "bad"], ["ab", "a", "d"] ["ab", "ad"], ["aba", "d"], ["abad"]

// [a, b, c, d]
// [aba, d]