// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

/*


*/

// Iterative

function chaosInTheGrid(grid) {
  let dp = grid.map((row, idx) => {
    let newRow = grid[0].slice();
    newRow[0] = 1;
    
    if (idx === 0) return newRow.fill(1);
    else return newRow.fill(0, 1);
  });
  
  let rowLength = grid[0].length;
  let result = 1;

  for (let row = 1; row < dp.length; row += 1) {
    for (let col = 1; col < rowLength; col += 1) {
      result = dp[row - 1][col] + dp[row][col - 1];
      dp[row][col] = result;
    }
  }

  return result;
}


// Recursive

/*
[[1]]
rows 1
cols 1
grid(0, 0)
  return 1;

[[1],
 [1]] 
rows 2
cols 1
grid(1, 0)

[[1, 1]]
rows 1
cols 2
grid (0, 1)

[[1, 1],
 [1, 0]]
rows 2
cols 2

grid(1, 1)
grid(0, 1) + grid (1, 0) => 1 + 1 => 2

*/
// BRUTE FORCE RECURSION
function chaosInTheGrid(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  function gridVal(row, col) {
    if (row === 0 || col === 0) return 1;
    return gridVal(row - 1, col) + gridVal(row, col - 1); 
  }

  return gridVal(rows - 1, cols - 1); // last row, last col
}

// MEMOIZED RECURSION (with map)
function chaosInTheGrid(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let memo = new Map();

  function gridVal(row, col) {
    if (row === 0 || col === 0) return 1;

    let key = `${row}-${col}`;

    if (memo.has(key)) {
      return memo.get(key);
    } else {
      let val = gridVal(row - 1, col) + gridVal(row, col - 1);
      memo.set(key, val);
      return val;
    }
  }

  return gridVal(rows - 1, cols - 1);
}

// MEMOIZED RECURSION (with array)
function chaosInTheGrid(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let memo = new Array(rows).fill().map(row => new Array(cols).fill(0));
  
  function gridVal(row, col) {
    if (row === 0 || col === 0) return 1;

    if (memo[row][col] !== 0) {
      return memo[row][col];
    } else {
      let val = gridVal(row - 1, col) + gridVal(row, col - 1);
      memo[row][col] = val;
      return val;
    }


  }

  return gridVal(rows - 1, cols - 1);
}


// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true