/*
https://leetcode.com/problems/find-peak-element/description/

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered 
to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.

*/

function findPeakElement(nums) {
  if (nums.length < 3) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let leftNum = nums[mid - 1] || -Infinity;
    let rightNum = nums[mid + 1] || -Infinity;
    if (nums[mid] > leftNum && nums[mid] > rightNum) {
      return mid; 
    } else if (nums[mid] > nums[mid - 1]) {
      left = mid + 1; // remove left half
    } else {
      right = mid - 1; // remove right half
    }
  }

  return nums[right];
} // mine has a few errors in leetcode

// Srdjan
const findPeakElement = (nums) => {
  if (nums.length === 1) {
      return 0;
  }

  const isPeak = (mid, nums) => {
      if (mid === 0) {
          return nums[mid] > nums[mid + 1];
      }
      if (mid === nums.length - 1) {
          return nums[mid] > nums[mid - 1];
      }
      return nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1];
  };

  let start = 0;
  let end = nums.length - 1;
  
  while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (isPeak(mid, nums)) {
          return mid;
      } else if (mid !== nums.length - 1 && nums[mid + 1] > nums[mid]) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return -1;
};

console.log(findPeakElement([1,2,3,1])); // 2
console.log(findPeakElement([1,2,1,3,5,6,4])); // 5 or 1
console.log(findPeakElement([1]));
