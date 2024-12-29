// Write a function named `findZeroPosition` that takes in a
// sorted array of distinct integers as input.
// The function should return the index where the value 0 is
// found in the array, or the index where it would be inserted if
// it were not found.

// If the value 0 is found in the array, the function should
// return the index of the value 0. If the value 0 is not found,
// the function should return the index where it would be inserted
// while maintaining the sorted order of the array.

// Example:
// Input: nums = [-7, -5, -3, 0, 2]
// Output: 3

// Example:
// Input: nums = [3, 5, 7, 9, 11]
// Output: 0

/*
[ 3, 5, 7, 9, 11]
  ^  ^
left  right

(idx's)
left: 0
right: -1
mid: (0 + 1)/2 => 0.5 => 0

nums[0] = 3
if (nums[0] === 0) NO
else if (nums[0] < 0) NO
  => 
else
  => right = 0 - 1 => -1


*/


function findZeroPosition(nums) {
  const target = 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}



console.log(findZeroPosition([-7, -5, -3, 0, 2])); // 3
console.log(findZeroPosition([3, 5, 7, 9, 11])); // 0
console.log(findZeroPosition([-8, -7, -5, -2, -1])); // 5