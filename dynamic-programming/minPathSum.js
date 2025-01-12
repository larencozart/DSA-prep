
/*
https://leetcode.com/problems/minimum-path-sum/description/

Given a m x n grid filled with non-negative numbers, find a path from top left 
to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200



base case: if we reach the bottom right corner, return that square

recursive case: 
*/

function minPathSum(grid) {
  let row = grid.length - 1;
  let col = grid[0].length - 1;

  function walkGrid(row = grid.length - 1, col = grid[0].length - 1) {
    console.log("row:", row, "col:", col);
    if (row === 0 && col === 0) return grid[row][col];
    if (row < 0 || col < 0) return Infinity;
    if (row === 0)

    return Math.min(walkGrid(row - 1, col), walkGrid((row, col - 1)));
  }

  return grid[row][col] + walkGrid(row, col);
};



// iterative 
// function minPathSum(grid) {
//   let dp = new Array.from()
// }

console.log(minPathSum([[2, 1], [3, 1]])); // 3
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7
// console.log(minPathSum([[1,2,3],[4,5,6]])); // 12