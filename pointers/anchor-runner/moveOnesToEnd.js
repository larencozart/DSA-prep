// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

// BRUTE FORCE APPROACH: Laren
function moveOnesToEnd1(arr) {
  let ones = [];
  let nonOnes = []

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 1) {
      ones.push(1);
    } else {
      nonOnes.push(arr[i]);
    }
  }

  return nonOnes.concat(ones);
}

// BRUTE FORCE APPROACH:  LS => O(N^2)
function moveOnesToEnd2(nums) {
  let idx = 0;
  let counter = 0;

  while (counter < nums.length) {
    if (nums[idx] === 1) {
      nums.splice(idx, 1); // deletion as O(N)
      nums.push(1);
    } else {
      idx++;
    }
    counter++;
  }
  return nums;
}

// TWO POINTER: ANCHOR RUNNER
/*
Where does my anchor pointer start? 
- The anchor pointer is initially set to the beginning of the array (index 0).

Where does my runner pointer start? 
- The runner pointer is initially set to the beginning of the array (index 0) as well.

Under which condition do I move the anchor pointer? 
- We move the anchor pointer after we make a swap, where anchor is replaced with a non-one.

Under which condition do I move the runner pointer? 
- We move the runner pointer on each iteration, regardless of the element. 
  When a swap is made, or not, runner will be incremented.

Does the anchor pointer do something besides moving? 
- It ensures that non-one elements are moved towards the beginning of the array 
  by swapping the element at its current index with the element at the index pointed 
  to by the runner pointer.

Does the runner pointer do something besides moving? 
- When the runner pointer encounters a non-one element, it swaps the value at its 
  current index with the value at the index pointed to by the anchor pointer.

Under which condition do we stop the iteration? 
- When the runner pointer makes it to the end of our array.

*/

function moveOnesToEnd3(arr) {
  let anchor = 0;

  for (let runner = 0; runner < arr.length; runner += 1) {
    if (arr[runner] !== 1) {
      [arr[runner], arr[anchor]] = [arr[anchor], arr[runner]];
      anchor += 1;
    }
  }

  return arr;
}

function moveOnesToEnd(arr) {
  let anchor = 0;
  let runner = 0;

  while (runner < arr.length) {
    let valAtAnchor = arr[anchor];
    let valAtRunner = arr[runner];
    if (arr[runner] !== 1) {
      arr[anchor] = valAtRunner;
      arr[runner] = valAtAnchor;
      anchor += 1;
    }

    runner += 1;
  }

  return arr;
}


// READER WRITER VARIANT:

function moveOnesToEnd5(arr) {
  let writer = 0;
  let reader = 0;

  while (reader < arr.length) {
    if (reader !== 1) {
      arr[writer] = arr[reader];
      writer += 1;
    }

    reader += 1;
  }

  while (writer < arr.length) {
    arr[writer] = 1;
    writer += 1;
  }

  return arr;
}


console.log(moveOnesToEnd([1, 2, 1, 4, 8])); // [2, 4, 8, 1, 1]