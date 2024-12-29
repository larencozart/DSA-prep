// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

/*
[-4, -3, -2, -1, 3, 4]
*/

// what are we looking for? rightMost negative integer
function minimumCount(nums) {
  if (nums.length < 1) return 0;

  let left = 0;
  let right = nums.length - 1;
  let rightMost = - 1;
  let zeros = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

      if (nums[mid] < 0) {
      rightMost = mid;
      left = mid + 1;
      } else if (nums[mid] === 0) {
        right = mid - 1;
        zeros += 1;
      } else { // nums[midd] > 0
        right = mid - 1
      }
  }

  const negativeCount = rightMost + 1;
  const positiveCount = nums.length - negativeCount - zeros;

  return negativeCount <= positiveCount ? negativeCount : positiveCount;

}


console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2); // if counts for both are the same 
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.