
  //[27, 38, 43]
  //[3, 9, 10, 82]

  //1. pointer1 => 27, pointer2 => 3
  // arr [3], pointer2 => 9

  //2. pointer1 => 27, pointer2 => 9
  // arr [3, 9], pointer2 => 10

  //3. pointer1 => 27, pointer2 => 10
  // arr [3, 9, 10], pointer2 => 82

  //4. pointer1 => 27, pointer2 => 82
  // arr [3, 9, 10, 27], pointer1 => 38

  //5. pointer1 => 38, pointer2 => 82
  // arr [3, 9, 10, 27, 38], pointer1 => 43

  //6. pointer1 => 43, pointer2 => 82
  // arr [3, 9, 10, 27, 38, 43] pointer1 => out of bound. (end while loop)

  // since arrays are sorted, and we reached end of arr1, which means all numbers from arr1
  // are smaller than number pointed by pointer2 (and all numbers from pointer2 and onward).

  //7. pointer2 => 82,
  // arr [3, 9, 10, 27, 38, 43].concat([82])


function mergeSort(arr) {
  //base case when array has one or 0 number. (base case array is sorted, and we dont need to merge)
  if (arr.length <= 1) return arr;
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  let left = mergeSort(arr.slice(0, mid + 1));
  let right = mergeSort(arr.slice(mid + 1));
  
  //we merge after spliting array into two halves
  return merge(left, right);
}

function merge(arr1, arr2) {
  let arr = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while(pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] > arr2[pointer2]) {
          arr.push(arr2[pointer2]);
          pointer2++;
      } else {
          arr.push(arr1[pointer1]);
          pointer1++;
      }
  }

  if (pointer1 < arr1.length) arr = arr.concat(arr1.slice(pointer1));
  if (pointer2 < arr2.length) arr = arr.concat(arr2.slice(pointer2));

  return arr;
}

//Test Cases
const testCases = [
  { input: [38, 27, 43, 3, 9, 82, 10], expected: [3, 9, 10, 27, 38, 43, 82] },
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
  { input: [4, 2, 4, 3, 1, 3, 2], expected: [1, 2, 2, 3, 3, 4, 4] },
  { input: [-3, -1, -4, -2, 0], expected: [-4, -3, -2, -1, 0] },
  { input: [7, 7, 7, 7, 7], expected: [7, 7, 7, 7, 7] },
  { input: [42], expected: [42] },
  { input: [], expected: [] },
  { input: [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90], expected: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] },
  { input: [2.5, 3.1, 1.8, 4.6, 3.3], expected: [1.8, 2.5, 3.1, 3.3, 4.6] },
];

// Run Tests
testCases.forEach(({ input, expected }, index) => {
  const output = mergeSort(input);
  console.log(`Test Case ${index + 1}:`, output);
  console.assert(
      JSON.stringify(output) === JSON.stringify(expected),
      `Failed Test Case ${index + 1}: Expected ${expected}, but got ${output}`
  );
});
