/*
https://leetcode.com/problems/subsets/description/

Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution 
in any order.

 
Example 1:
  Input: nums = [1,2,3]
  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
  Input: nums = [0]
  Output: [[],[0]]
 

Constraints:
  1 <= nums.length <= 10
  -10 <= nums[i] <= 10
  All the numbers of nums are unique.
*/

function subsets(nums) {

}

function subsets(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  function backTrack(nums, idx, current) {
      res.push([...current]);
      for (let i = idx; i < nums.length; i++) {
          if (i > 0 && nums[i] === nums[i - 1]) continue;
          current.push(nums[i]);
          backTrack(nums, i + 1, current);
          current.pop(nums[i]);
      }
  }
  backTrack(nums, 0, []);
  return res;
};

/*
template:
function someProblem(candidates) {
  function backtrack(candidates, candidate, result) {
    if () { // <<success condition>> 
      result.push([...candidate]);
      return;
    }

    for (let elem of candidates) {
      if (true) {  // replace true with the dead-end condition
        continue;
      }

      candidate.push(elem);  // take
      backtrack(candidates, candidate, result);  // explore
      candidate.pop();  // clean up
    }
  }

  const result = [];
  const candidate = [];
  backtrack(candidates, candidate, result);
  return result;
}
*/