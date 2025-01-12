/*
https://leetcode.com/problems/minimum-size-subarray-sum/description/

Given an array of positive integers nums and a positive integer target, 
return the minimal length of a subarray whose sum is greater than or equal 
to target. If there is no such subarray, return 0 instead.

Example 1:
  Input: target = 7, nums = [2,3,1,2,4,3]
  Output: 2
  Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
  Input: target = 4, nums = [1,4,4]
  Output: 1

Example 3:
  Input: target = 11, nums = [1,1,1,1,1,1,1,1]
  Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).


*/

// Mason
function minSubArrayLen(target, nums) {
  let start = 0;
  let end = 0;
  let size = Infinity;
  let sum = 0;

  while (end < nums.length + 1) {
    if (sum >= target) {
      size = Math.min(size, end - start);
      sum -= nums[start];
      start++;
    } else {
      sum += nums[end];
      end++;
    }
  }

  return size === Infinity ? 0 : size
}

// Laren + Brian
function minSubArrayLen(target, nums) {
  let minLen = Infinity;
  let start = 0;
  let end = 0;
  let sum = nums[0];

  while (end < nums.length) {    
    if (sum >= target) {
      let currLen = end - start + 1;
      minLen = Math.min(minLen, currLen);
      sum -= nums[start];
      start += 1;
    } else {
      end += 1;
      sum += nums[end];
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Srdjan walkthrough
/*
If you have an array, and need linear time, you often
use two pointers

Easier anchor runner: runner moves at each iteration
Harder: runner doesn't constantly move


subarray length forumla: runner - anchor + 1

*/

const minSubArrayLen = (target, nums) => {
  let a = 0;
  let r = 0;
  let curr_sum = 0;
  let result = nums.length + 1;

  while (r < nums.length) {
      curr_sum += nums[r];
      while (curr_sum >= target) {
          if (r === a) {
              return 1;
          }
          if (r - a + 1 < result) {
              result = r - a + 1;
          }
          curr_sum -= nums[a];
          a++;
      }
      r++;
  }

  if (result === nums.length + 1) return 0;
  return result;
};


// Now worse with NlogN
/* 
if its logN you need binary search
  - not clear where to split
  - split on lengths instead of the array
  - if you are search on lengths 
    => the time complexity is always NlogN
*/
function minSubArrayLen(target, nums) {
  let left = 0;
  let right = nums.length - 1;
  let sum = 0;

  let minLen = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // target case

    // if ===> remove left half

    // if ===> remove right half
  }

}



console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2
console.log(minSubArrayLen(4, [1,4,4])); // 1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // 0
