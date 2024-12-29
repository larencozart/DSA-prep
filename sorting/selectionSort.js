/*
Let's take a look at the steps for selection sort, assuming we are sorting in ascending order:

1. The algorithm divides the array into two parts: 
the sorted part and the unsorted part. 

We can imagine the sorted part on the left and the unsorted part on the right. 
Initially, the sorted part is empty, and the unsorted part contains the entire array.

2. In each pass, the algorithm scans the unsorted part of the array to find 
the smallest element in that part.

3. Once the smallest element is identified, it is swapped with the leftmost 
element of the unsorted part (the element at the boundary of the sorted and 
  unsorted parts).

4. After the swap, the boundary between the sorted and unsorted parts is shifted 
one position to the right. The selected element is now considered part of the sorted 
part, and the unsorted part is reduced by one element.

5. Steps 2 to 4 are repeated until the unsorted part contains just one element, which 
means it must be sorted. Consequently, the entire array is sorted.

*/

function selectionSort(nums) {
  for (let unsortedStart = 0; unsortedStart < nums.length - 1; unsortedStart += 1) {
    let smallestIdx = unsortedStart;

    for (let idx = unsortedStart + 1; idx < nums.length; idx += 1) {
      if (nums[idx] < nums[smallestIdx]) {
        smallestIdx = idx;
      }
    }

    if (smallestIdx !== i) {
      [nums[unsortedStart], nums[smallestIdx]] = [nums[smallestIdx], nums[unsortedStart]];
    }
  }

  return nums;
}


console.log(selectionSort([3, 8, 2, 1])); // Output: [1, 2, 3, 8]
console.log(selectionSort([10, 4, 8, 1, 99])); // [1, 4, 8, 20, 99]
console.log(selectionSort([4, 3, 2, 1])); // [1, 2, 3, 4]