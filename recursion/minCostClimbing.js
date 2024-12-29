/*
You are given an integer array cost where cost[i] is the cost of ith 
step on a staircase. Once you pay the cost, you can either climb one 
or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.


Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
 

Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999

Base case:
end of array or array has no more elements

Reduction step:
slice of array
*/

function minCostClimbingStairs(cost) {
    if (cost.length === 0) return 0;

    if (cost[0] < cost[1] ) {
      console.log("cost[0]:", cost[0]);
      return cost[0] + minCostClimbingStairs(cost.slice(1));
    } else {
      console.log("cost[1]:", cost[0]);
      return (cost[1] || 0) + minCostClimbingStairs(cost.slice(2));
    }  
};


// ONLy recursion
function minCostClimbingStairs(cost) {  
  return Math.min(climbStairs(cost, 0), climbStairs(cost, 1));
};

function climbStairs(cost, idx) {
  if (idx >= cost.length) return 0;

  return cost[idx] + Math.min(
      climbStairs(cost, idx + 1),
      climbStairs(cost, idx + 2)
    );
    
}

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // 6
console.log(minCostClimbingStairs([10,15,20])); // 15


// Jim's 8 Solutions - some with recursion some with DP + recursion
/*
//each step we calculate min cost of taking current step.
var minCostClimbingStairs = function(cost) {
    
  function helper(cost, idx) {
      if (idx < 2) return cost[idx];
      
      return  Math.min(helper(cost, idx - 2), helper(cost, idx - 1)) + cost[idx];
      
  }

  return Math.min(helper(cost, cost.length - 1), helper(cost, cost.length - 2));
};

var minCostClimbingStairs = function(cost) {
  
  let memo = Array.from({ length: cost.length }).fill(false);

  function helper(cost, idx) {
      if (idx < 2) return memo[idx] = cost[idx];

      if (memo[idx] !== false) return memo[idx];
      else {
          return memo[idx] = Math.min(helper(cost, idx - 2), helper(cost, idx - 1)) + cost[idx];
      }
      
  }

  return Math.min(helper(cost, cost.length - 1), helper(cost, cost.length - 2));
};



var minCostClimbingStairs = function(cost) {
  const dp = Array.from({ length: cost.length }).fill(0);

  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let idx = 2; idx < dp.length; idx++) {
      dp[idx] = Math.min(dp[idx - 1], dp[idx - 2]) + cost[idx];
  }

  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};



var minCostClimbingStairs = function(cost) {
  let lastStep = 0;
  let secondLastStep = 0;
  for (let idx = 0; idx < cost.length; idx++) {
      let currentCost = cost[idx] + Math.min(lastStep, secondLastStep);
      secondLastStep = lastStep;
      lastStep = currentCost;
  }

  return Math.min(lastStep, secondLastStep);
};

//each step we calculate min cost of getting to current step.
var minCostClimbingStairs = function(cost) {
  
  function helper(cost, idx) {
      if (idx < 2) return 0;
      
      
      let fromLastStep = helper(cost, idx - 1) + cost[idx - 1];
      let fromSecondLastStep = helper(cost, idx - 2) + cost[idx - 2];
      return Math.min(fromLastStep, fromSecondLastStep);
  }

  return helper(cost, cost.length);
};

var minCostClimbingStairs = function(cost) {
  
  const memo = Array.from({length: cost.length + 1}).fill(false);
  function helper(cost, idx) {
      if (idx < 2) return 0;
      
      if (memo[idx] !== false) return memo[idx];

      let fromLastStep = helper(cost, idx - 1) + cost[idx - 1];
      let fromSecondLastStep = helper(cost, idx - 2) + cost[idx - 2];
      return memo[idx] = Math.min(fromLastStep, fromSecondLastStep);
  }

  return helper(cost, cost.length);
};

var minCostClimbingStairs = function(cost) {
  const dp = Array.from({length: cost.length + 1}).fill(0);

  for (let idx = 2; idx < dp.length; idx++) {
      let fromLastStep = dp[idx - 1] + cost[idx - 1];
      let fromSecondLastStep = dp[idx - 2] + cost[idx - 2];
      dp[idx] = Math.min(fromLastStep, fromSecondLastStep);
  }

  return dp[dp.length - 1];
};

var minCostClimbingStairs = function(cost) {
  let lastStep = 0;
  let secondLastStep = 0;

  for (let idx = 2; idx < dp.length + 1; idx++) {
      let fromLastStep = lastStep + cost[idx - 1];
      let fromSecondLastStep = secondLastStep + cost[idx - 2];
      
      let current = Math.min(fromLastStep, fromSecondLastStep);
      secondLastStep = lastStep;
      lastStep = current;
  }

  return lastStep;
};
*/