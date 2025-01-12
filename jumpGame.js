/*
https://leetcode.com/problems/jump-game/description/

You are given an integer array nums. You are initially 
positioned at the array's first index, and each element 
in the array represents your maximum jump length at that 
position.

Return true if you can reach the last index, or false 
otherwise.



Greedy:
- you always want to take the farthest you can jump
*/


function canJump(nums) {
  let farthest = 0;

  // tricky => iterating through something that is changing in size
  // if we don't increment farthest we exit. 
  for (let i = 0; i <= farthest; i += 0) {
    if (farthest >= nums.length - 1) return true;

    if (i + nums[i] > farthest) {
      farthest = i + nums[i];
    }

  }

  return false;
}

console.log(canJump([3, 3, 2, 0, 0, 0, 0, 1])); 
console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false