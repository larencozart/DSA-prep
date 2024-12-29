// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

/*
[1, 2, 3, 3, 3, 3, 3, 4, 5]
      ^L^m ^R          

 L: 2
 R: 1
 mid: 2
 leftmost = 2
*/

function findLeftMostIdx(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let leftMost = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      leftMost = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return leftMost;
}

function findRightMostIdx(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let rightMost = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      rightMost = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightMost;
}


function findRangeOfThrees(nums) {
  const target = 3;
  return [findLeftMostIdx(nums, target), findRightMostIdx(nums, target)];
}


console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
console.log(findRangeOfThrees([]));                          // [-1, -1]