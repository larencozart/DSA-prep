// Given an array of integers nums, find sum of all of its 
// elements using recursion.

/*
Base Case:
the last element in the array

Recursive Def:
The sum is found by adding the last sum with the previous sums

Recursive Case:
Reduction: array without first el
return first el + (sum of other els)


*/

function sum(nums) {
  if (nums.length === 0) return 0;

  return nums[0] + sum(nums.slice(1));
}


console.log(sum([1,2,3]) === 6); // true
console.log(sum([10, 15, 20, 10, 5]) === 60); // true
console.log(sum([-5, -1, 5, 2, -3]) === -2); // true
console.log(sum([7]) === 7); // true
console.log(sum([]) === 0);

// All test cases should log true.