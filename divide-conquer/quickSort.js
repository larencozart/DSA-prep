function partition(arr, low = 0, high = arr.length - 1) {
  let pivotIdx = Math.floor((low + high) / 2);
  let pivot = arr[pivotIdx];

  // Move pivot to the beginning of the array segment
  [arr[pivotIdx], arr[low]] = [arr[low], arr[pivotIdx]];

  let left = low + 1;
  let right = high;


  while (left <= right) {
    while (left <= right && arr[left] < pivot) {
      left += 1;
    }
  
    while (left <= right && arr[right] >= pivot) {
      right -= 1;
    }

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  
  [arr[0], arr[right]] = [arr[right], arr[0]];
  return right;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

console.log(quickSort([7, 3, 9, 8 , 5, 1]));

