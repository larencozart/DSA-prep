// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.


// NAIVE APPROACH: two nested for loops => time: O(N^2), space: O(1)
function findPair1(nums) {
  for (let firstIdx = 0; firstIdx <= nums.length - 2; firstIdx++) {
    let firstNum = nums[firstIdx];
    for (let secondIdx = firstIdx + 1; secondIdx <= nums.length - 1; secondIdx++) {
      let secondNum = nums[secondIdx];
      if (firstNum + secondNum === 10) return [firstNum, secondNum];
    }
  }
  return null;
}


// OPTIMIZED APPROACH: hash table (Map) => time: O(N), space: O(N)
function findPair(nums) {
  const numMap = new Map();
  const target = 10;

  for (let idx = 0; idx < nums.length; idx += 1) {
    const currNum = nums[idx];
    const complement = target - currNum;

    if (numMap.has(complement)) return [complement, currNum];

    numMap.set(currNum, idx)

  }

  return null;
}



// Test Cases:
console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]