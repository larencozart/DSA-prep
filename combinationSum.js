/*
Given an array of distinct integers candidates and a target 
integer target, return a list of all unique combinations of 
candidates where the chosen numbers sum to target. You may 
return the combinations in any order.

The same number may be chosen from candidates an unlimited 
number of times. Two combinations are unique if the 
frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique 
combinations that sum up to target is less than 150 combinations 
for the given input.

Example 1:
  Input: candidates = [2,3,6,7], target = 7
  Output: [[2,2,3],[7]]
  Explanation:
  2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be 
  used multiple times.
  7 is a candidate, and 7 = 7.
  These are the only two combinations.

Example 2:
  Input: candidates = [2,3,5], target = 8
  Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
  Input: candidates = [2], target = 1
  Output: []
 

Constraints:
  1 <= candidates.length <= 30
  2 <= candidates[i] <= 40
  All elements of candidates are distinct.
  1 <= target <= 40

*/


function combinationSum(candidates, target) {
    function backtrack(candidates, candidate, result) {
      // success condition
      if ((candidate.reduce((a, b) => a + b)) === target) { 
        result.push([...candidate]);
        return;
      }

      for (let candidate of candidates) {
        // dead-end condition => if we exceed the target
        if (candidate.reduce((a, b) => a + b) > target) continue; 

        candidate.push(candidate); // take
        backtrack(candidates, candidate, result); // explore
        candidate.pop(); // remove or clean up
      }
    }

    const result = [];
    const candidate = [];
    backtrack(candidates, candidate, result, 0);
    return result;
};


// Mason
var combinationSum = function(candidates, target) {
  function sum(arr) {
    if (!arr.length) return 0;
    return arr.reduce((a, b) => a + b);
  }

  function backtrack(candidates, candidate, result, pos) {
    if (sum(candidate) === target) {
      result.push([...candidate]);
      return;
    }

    for (let i = pos; i < candidates.length; i++) {
      if (sum(candidate) > target) continue;
      
      candidate.push(candidates[i]);  // take
      backtrack(candidates, candidate, result, i);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result, 0);
  return result;
};


console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));