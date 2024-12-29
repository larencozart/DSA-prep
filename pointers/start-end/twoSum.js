// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the number that appears first
// should be the first one in the output array.

// The problem guarantees that there will be either one
// unique pair that matches the target sum or no pairs at all.

// BRUTE FORCE:
function findPair1(nums, target) {
  const length = nums.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let currentSum = nums[i] + nums[j];
      if (currentSum === target) {
        return [nums[i], nums[j]];
      }
    }
  }

  return null;
}

// TWO-POINTER: START + END

/*
When should I move the start pointer? 
- We move the start pointer to the right (increment it) when the sum 
  of the numbers at the start and end pointers is less than the target.

When should I move the end pointer? 
- We move the end pointer to the left (decrement it) when 
  the sum of the numbers at the start and end pointers is greater than the target.

Does the start pointer do something besides moving? 
- After we move the start pointer we use the value at its position to calculate
  the new pair sum.

Does the end pointer do something besides moving? 
- After we move the end pointer we use the value at its position to calculate the
  new pair sum.

Under which condition do we stop the iteration? 
- We stop the iteration when we find our target number, or when the start and end 
  pointers meet, indicating that there is no valid solution.
*/


function findPair(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let currentSum = nums[start] + nums[end]

    if ( currentSum === target) {
      return [nums[start], nums[end]];
    } else if (currentSum < target) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return null;
}



// Test Cases:
console.log(findPair([1, 3, 6, 7, 8, 12], 14)); // Output: [6, 8]
console.log(findPair([2, 6, 8, 10], 17)); // null