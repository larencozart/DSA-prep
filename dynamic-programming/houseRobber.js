/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent houses have security 
systems connected and it will automatically contact the police if two adjacent 
houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:
(will always have one or more house)
1 <= nums.length <= 100
0 <= nums[i] <= 400


Recursive:
1. base case: 
- getting to the end of the array of houses or passing the end of the array
- 1 house => that is the max money

one potential base case:
  // if (nums.length === 0) return 0;

Another way of setting up base case:
  // if (nums.length === 1) return nums[0];
  // if (nums.length === 2) return Math.max(nums[0], nums[1]);

2. recursive case:
- two options: take the money from house or  not 


house   house   house    house 
  1       2       3       1


*/

// recusion using arrays
function rob(nums) {
  const memo = new Map();

  function helper(nums) {
    if (nums.length === 0) return 0;
    if (memo.has(nums.length)) return memo.get(nums.length);

    const result = Math.max(nums[0] + helper(nums.slice(2)), helper(nums.slice(1)));
    memo.set(nums.length, result);
    return result;
  }
  
  return helper(nums);
};

// recursion + pointer solution
function rob2(nums) {
  let memo = new Map();

  function helper(p) {
    if (p >= nums.length) return 0;
    
    if (memo.has(p)) return memo.get(p);

    const result = Math.max(nums[p] + helper(p + 2), helper(p + 1));
    memo.set(p, result);
    return result;
  }

  return helper(0);
}

/*
house  house  house  house
 0      1       2      3


*/

// tabulation
function rob(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length + 1).fill(0);
  dp[1] = nums[0];

  for (let i = 2; i <= nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[dp.length - 1];
}


console.log(rob([1])); // 1
console.log(rob([1, 2])); // 2
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12