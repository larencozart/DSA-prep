/*

Algorithm:

1.  The algorithm starts by comparing the first two elements of the array.
- If the first element is greater than the second element, we swap them.
- If they are in the correct order, no change is made.

2. The algorithm then moves to the next pair of elements (the second and third elements) 
and compares them in the same way.

3. This process continues, comparing and swapping adjacent elements until we reach the 
end of the array.

4. At the end of the first iteration, the largest element in the array will be in its 
correct position at the end.

5. The algorithm then starts the next iteration, repeating steps 1 to 3, but excluding the 
last element, as it is already in its correct position.

6. Each iteration moves the next largest element to its correct position at the end of the 
remaining unsorted portion of the array.

7. The iterations continue until a pass is completed without any swaps, indicating that the array is completely sorted.


ex: 

First Pass:
[5, 3, 8, 7, 2]
------------
5-3 => 3, 5
5-8 => 5, 8
8-7 => 7, 8
8-2 => 2, 8

Second Pass:
[3, 5, 7, 2, 8]
(only iterate through: [3, 5, 7, 2])
------------
3-5 => 3, 5
5-7 => 5, 7
7-2 => 2, 7

Third Pass:
[3, 5, 2, 7, 8]
(only iterate through: [3, 5, 2])
------------
3-5 => 3, 5
5-2 => 2, 5

Fourth Pass:
[3, 2, 5, 7, 8]
(only iterate through: [3, 2])

3-2 => 2, 3

Solution: [2, 3, 5, 7, 8]

*/

function bubbleSort(nums) {
  const len = nums.length;

  for (let a = 0; a < len - 1; a += 1) {
    console.log("Amount of outer passes:", a);
    let swapped = false;

    for (let b = 0; b < len - 1 - a; b += 1) {
      console.log("Currenlty checking: ", nums[b], " and ", nums[b + 1])
      if (nums[b] > nums[b + 1]) {
        [nums[b], nums[b + 1]] = [nums[b + 1], nums[b]];
        swapped = true;
      }
    }

    console.log("Current order:", nums);
    if (!swapped) break;
  }

  return nums;
}


let p = console.log;

p(bubbleSort([5, 3, 8, 7, 2]))