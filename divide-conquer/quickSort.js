function partition(nums) {
  let pivot = nums[0];
  let left = 1;
  let right = nums.length - 1;


  while (left <= right) {
    while (left <= right && nums[left] < pivot) {
      left += 1;
    }
  
    while (left <= right && nums[right] >= pivot) {
      right -= 1;
    }

    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }
  
  [nums[0], nums[right]] = [nums[right], nums[0]];
  return nums;
}

function quickSort(nums) {
  
}

console.log(partition([7, 3, 9, 8 , 5, 1]));