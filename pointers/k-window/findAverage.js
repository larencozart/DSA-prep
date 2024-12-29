/*
Find Average
In this provided, you're given an array of numbers nums, and a specific 
integer k. Your objective is to compute the average value of each contiguous 
subarray of length k within the given array.

Requirements:

The input will be an array of numbers and an integer k.
You need to find the average of every contiguous subarray of size k in the array.
The output should be an array containing these averages.
*/


// FIRST ATTEMPT -laren
/*
[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]
[1, 2, 3, 4, 5, 6], 3
 ^^
count = 3 
groupSUm = 6

=> push average to averages
=> reset count
=> resetn groupSum
=> increment anchor
*/

function findAverages(nums, k) {
  let averages = [];

  let anchor = 0;
  let runner = 0;
  let count = 0;
  let groupSum = 0;
  let currNum = nums[runner];

  while (anchor <= nums.length - k) {
    currNum = nums[runner];
    count += 1;
    groupSum += currNum;

    // console.log('currNum:', currNum, 'groupSum:', groupSum);

    if (count === k) {
      let currAverage = groupSum / k;
      console.log('groupSum:', groupSum, 'avg:', currAverage)
      console.log(currAverage);

      averages.push(currAverage);
      count = 0;
      groupSum = 0;
      anchor += 1;
      runner = anchor;
      console.log('starting at a new group:', nums[anchor]);
    }

    runner += 1;
  }

  return averages;
}



// Example test cases:
console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
// [1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]


// console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
// console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
// console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
// console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]