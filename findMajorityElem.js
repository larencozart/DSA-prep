// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.


// NAIVE APPROACH: time: O(N), space: O(N)
function findMajority1(nums) {
  let half = Math.ceil(nums.length / 2);

  let numsFrequency = {}
  nums.forEach(num => {
    numsFrequency[num] ? numsFrequency[num] += 1 : numsFrequency[num] = 1
  })

  for (let num in numsFrequency) {
    if (numsFrequency[num] >= half) return Number(num);
  }
}

// LS NAIVE APPROACH: time O(N^2)
function findMajority2(nums) {
  const n = nums.length;
  const majorityCount = Math.ceil(n / 2);

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] === nums[i]) {
        count++;
      }
    }
    if (count >= majorityCount) {
      return nums[i];
    }
  }
}


// OPTIMAL APPROACH: O(N)
function findMajority(nums) {
  let half = nums.length / 2
  let numMap = new Map()

  for (let idx = 0; idx < nums.length; idx += 1) {
    let num = nums[idx];
    numMap.has(num) ? numMap.set(num, numMap.get(num) + 1) : numMap.set(num, 1);

    if (numMap.get(num) >= half) return num;
  }
}

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true