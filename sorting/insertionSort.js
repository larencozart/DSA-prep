/*
1. start with second element in array
2. store that element
3. compare currently stored element with element on left
    - If an element on the left is greater than the stored value, 
    conceptually shift it to the right. 
            - In the code, this means overwriting the current index 
            with the value from the left.

PASS 1:            
[4, 2, 1, 3]            
    ^
    curr = 2
    4 > 2 => overwrite 
    [  4, 1, 3]    
    at end put curr at 0

[2, 4, 1, 3]
       ^
       curr = 1
       4 > 1 => overwrite
       [2,  , 4 , 3]
       2 > 1 => overwrite
       [ , 2, 4, 3]
       at end put curr at idx 0

[1, 2, 4, 3]
          ^
          curr =3
          4 > 3 => overwrite
          [1, 2,  , 4]
          2 < 3
                
*/

function insertionSort(nums) {
  for (let currIdx = 1; currIdx < nums.length; currIdx +=1) {
    let currNum = nums[currIdx];

    let leftIdx = currIdx - 1;
    while (leftIdx >= 0) {
      if (nums[leftIdx] <= currNum) break;
      nums[leftIdx + 1] = nums[leftIdx];
      leftIdx -= 1;
    }

    nums[leftIdx + 1] = currNum;
  }

  return nums;
}

// LS - slightly different while loop condition
function insertionSort1(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort([4, 2, 1, 3]));