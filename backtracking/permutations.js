// Create a function `permutations` that takes an array of unique integers, `nums`, and
// returns all possible arrangements (permutations) of these numbers.

// The input array will contain at most 8 numbers.

// Example:

  // Input: [1,2,3]
  // Output: [
  //          [1, 2, 3],[1, 3, 2],[2, 1, 3],
  //          [2, 3, 1], [3, 1, 2], [3, 2, 1]
  //                                          ]

/*
terminal condition: when candidate array length is equal to input array length

success condition: all nums in array are distinct

dead-end condition: a num in array is already present

*/
function hasDistinctNums(candidate) {
  let visited = [];

  for (let num of candidate) {
    if (visited.includes(num)) return false;
    else visited.push(num);
  }

  return true;
}

function permutations1(nums) {
  function backtrack(nums, permutationCandidate, result) {
    if (permutationCandidate.length === nums.length) {
      if (hasDistinctNums(permutationCandidate)) { // success condition 
        result.push([...permutationCandidate]);
        return;
      }
    }
        

    for (let num of permutationCandidate) {
      // if (permutationCandidate.includes(num)) continue; // dead-end condition

      permutationCandidate.push(num);
      backtrack(nums, permutationCandidate, result);
      permutationCandidate.pop(); 

    }
  }

  const result = [];
  const permutationCandidate = [];
  backtrack(nums, permutationCandidate, result);

  console.log(result.length);
  return result;
}

function permutations(candidates) {
  function isUnique(nums) {
    const seen = new Set();
    for (let entry of nums) {
      if (seen.has(entry)) {
        return false;
      }
      seen.add(entry);
    }
    return true;
  }

  function backtrack(candidates, candidate, results) {
    if (candidate.length === candidates.length) {
      if (isUnique(candidate)) {
        results.push([...candidate]);
      }
      return;
    }
    for (let elem of candidates) {
      candidate.push(elem);
      backtrack(candidates, candidate, results);
      candidate.pop();
    }
  }

  const results = [];
  const candidate = [];
  backtrack(candidates, candidate, results);
  return results;
}


function testPermutations(input, expectedLength) {
  const result = permutations(input);
  if (result.length !== expectedLength) return false;

  const stringifiedPerms = result.map(JSON.stringify);
  const uniquePerms = new Set(stringifiedPerms);
  return uniquePerms.size === expectedLength;
}

// Test Cases:

console.log(testPermutations([1,2,3], 6));
console.log(testPermutations([0,1], 2));
// console.log(testPermutations([1], 1));
// console.log(testPermutations([1,2,3,4], 24));
// console.log(testPermutations([1,2,3,4,5], 120));
// console.log(testPermutations([1,2,3,4,5,6], 720));
// console.log(testPermutations([1,2,3,4,5,6,7], 5040));
// console.log(testPermutations([1,2,3,4,5,6,7,8], 40320));
// console.log(testPermutations([0,1,2,3,4,5,6,7,8,9], 3628800));

// Note: The order of permutations in the output doesn't matter,
// as long as all permutations are present.

// Don't run the last case for the naive-branch solution.
// If you do and your machine seems "stuck" press `CTRL+Z`