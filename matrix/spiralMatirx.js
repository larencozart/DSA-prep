/*
https://leetcode.com/problems/spiral-matrix/description/

Given an m x n matrix, return all elements of the matrix in spiral order.


Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100


Thoughts:
- 1. go across left to right all elems of first row [1, 2, 3]
- 2. go down from top to bottom all elems at last idx of eac row [ 6, 9] (exculding top row)
- 3. go across right to left all elems in last row [ 8, 7] (excluding last idx)
- 4. go up bottom to top all elems in first idx of each row (excluding top row)
- start over again -left to right (excluding cells that are already visited);

First row, last column, last row, first column, and then we move inwards by 1 and repeat. 
That's all. That is all the simulation that we need.



spiral.push(...matrix[0]);
spiral.push(...matrix.map(row => row[row.length - 1])); // didn't exclude 3
spiral.push(...matrix[matrix.length - 1].slice().reverse()); // didn't exclude 9
spiral.push(...matrix.map(row => row[0]).slice().reverse()); // didn't exclude 7



[4, 5]
[7, 8]

[5]

[ 1, 2, 3, 6, 9, 8 , 7, 4, 5]

*/

// popping off needed elements
function spiralOrder(matrix) {
  matrix = JSON.parse(JSON.stringify(matrix));

  let spiral = [];

  while (matrix.length > 0) {
    if (matrix[0][0] === undefined) break;

    // 1. add top row from left to right
    spiral.push(...matrix.shift());

    // 2. add last column digits
    for (let row of matrix) {
      let lastDigit = row.pop();
      spiral.push(lastDigit);
    }

    // 3. to avoid backwards considerations
    //    reverse the matrix and each row, and repeat loop
    matrix.reverse();
    matrix.map(row => row.reverse());
  }


  return spiral;
}

// Four Pointers
var spiralOrder = function(matrix) {
  let spiral = [];
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      spiral.push(matrix[top][i]);
    }

    top++;
    if (top > bottom) break

    for (let i = top; i <= bottom; i++) {
      spiral.push(matrix[i][right]);
    }

    right--;
    if (left > right) break

    for (let i = right; i >= left; i--) {
      spiral.push(matrix[bottom][i]);
    }

    bottom--;
    if (top > bottom) break

    for (let i = bottom; i >= top; i--) {
      spiral.push(matrix[i][left]);
    }

    left++;
    if (left > right) break
  }

  return spiral
};


// Walk through with Srdjan - 4 pointers
function spiralOrder(matrix) {
  let top = 0;
  let left = 0; 
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let result = [];

  while (result.length < matrix.length * matrix[0].length) {
    // left to right on top row
    result.push(...matrix[0]);
    top += 1;
    (console.log("result:", result, "new top:", top));
    break;
    // top to bottom on right side

    right += 1;

    // right to left on bottom row

    bottom += 1;

    // bottom to top on left side

    left += 1
  }
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]
// console.log(spiralOrder()); 