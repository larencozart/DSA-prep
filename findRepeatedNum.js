// Given an array nums, sorted in ascending order (where elements are equal to or increase as you move through the array), determine if a specified number, target, appears more than three times in the array. The function should return true if target is found at least four times, and false otherwise.

function isTargetFrequent(nums, target) {
  firstIndex = findFirstOccurrence(nums, target)
  lastIndex = findLastOccurrence(nums, target)
  if (firstIndex < 0) {
    return false
  }
  return lastIndex - firstIndex >= 3
}

function findFirstOccurrence(nums, target) {
  let left = 0
  let right = nums.length - 1
  result = -1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) {
      result = mid
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result
}

function findLastOccurrence(nums, target) {
  let left = 0
  let right = nums.length - 1
  result = -1
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] == target) {
      result = mid
      left = mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result
}

// DANIEL CHAE - algo takes away binary search
// *
// -- Algo --
// 1. binary search for minimal index i where nums[i] >= target
// 2. return true if nums[i] === target && nums[i + 3] === target
// */

// Code
function bsearchMin(iter, condition) {
  let left = 0;
  let right = iter.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (condition(iter[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function isTargetFrequent(nums, target) {
  let i = bsearchMin(nums, (x) => x >= target);
  return nums[i] === target && nums[i + 3] === target;
}


console.log(findFirstOccurrence([1, 2, 3, 3, 3, 3, 4], 3)) //=== true);