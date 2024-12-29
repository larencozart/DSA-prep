// two binary searches
function findProductPrice1(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  
  // Find potential row
  let left = 0;
  let right = matrix.length - 1;
  
  while (left <= right) {
      const midRow = Math.floor((left + right) / 2);
      const firstInRow = matrix[midRow][0];
      const lastInRow = matrix[midRow][matrix[midRow].length - 1];
      
      if (firstInRow <= target && target <= lastInRow) {
          // Binary search in this row
          return binarySearchRow(matrix[midRow], target);
      }
      
      if (target < firstInRow) {
          right = midRow - 1;
      } else {
          left = midRow + 1;
      }
  }
  
  return false;
}

function binarySearchRow1(row, target) {
  let left = 0;
  let right = row.length - 1;
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (row[mid] === target) return true;
      
      if (row[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  
  return false;
}

// one binary search - claude
function findProductPrice(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  let left = 0;
  let right = rows * cols - 1;
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = matrix[Math.floor(mid / cols)][mid % cols];
      
      if (midValue === target) return true;
      
      if (midValue < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  
  return false;
}

// Mason's solution
function innerBinarySearch2(prices, targetPrice) {
  let left = 0;
  let right = prices.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (prices[mid] === targetPrice) {
      return true
    } else if (prices[mid] < targetPrice) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return false
}

function findProductPrice2(prices, targetPrice) {
  let left = 0;
  let right = prices.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (prices[mid][0] <= targetPrice && prices[mid][prices[mid].length - 1] >= targetPrice) {
      return innerBinarySearch(prices[mid], targetPrice)
    } else if (prices[mid][0] > targetPrice) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

// Jim's one binary search solution
function findProductPrice3(arrs, target) {
  let row = arrs.length;
  let col = arrs[0].length;
   
  let left = 0;
  let right = row * col - 1;
   
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let rowIdx = Math.floor(middle / col);
    let colIdx = middle % col;
     
    let currVal = arrs[rowIdx][colIdx];
     
    if (currVal === target) return true;
    else if (currVal > target) right = middle - 1;
    else left = middle + 1;
  }
   
  return false;
}

// Jim's two search solution
function findProductPrice4(arrs, target) {
  let left = 0;
  let right = arrs.length - 1;
  let row = left;
  while (left <= right) {
    let currRow = Math.floor((left + right) / 2);
    let currPrice = arrs[currRow][0];
    if (currPrice < target) {
      row = currRow;
      left = currRow + 1;
    } else if (currPrice === target) {
      return true;
    } else {
      right = currRow - 1;
    }
  }
   
  left = 0;
  right = arrs[0].length - 1;
   
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currPrice = arrs[row][middle];
    if (currPrice === target) return true;
    else if (currPrice > target) right = middle - 1;
    else left = middle + 1;
  }
   
  return false;
}

console.log(findProductPrice([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true); 
console.log(findProductPrice([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true); 
console.log(findProductPrice([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false); 
console.log(findProductPrice([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true); 
console.log(findProductPrice([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);