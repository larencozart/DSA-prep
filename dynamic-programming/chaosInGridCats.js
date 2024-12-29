// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

// const grid = [
//   ["", "C", ""],
//   ["", "", ""],
// ];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

/*
[
  [1, 1, 1, 1, 0],
  [1, 0, 1, 2, 2],
  [1, 1, 2, 0, 2],
];

*/

function chaosInTheGridWithCats(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let dp = grid.slice().map((row, idx) => {
    if (idx === 0) {
      return row.map((col) => {
        if (col === 'C') return 0;
        else return 1;
      });
    } else {
      return row.map((col, idx) => {
        if (col === 'C') return 0;
        else if (idx === 0) return 1;
        else return -1;
      });
    }
  });

  for (let row = 1; row < rows; row += 1) {
    for (let col = 1; col < cols; col += 1) {
      if (dp[row][col] === 0) continue;

      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      // console.log("currVal", dp[row][col]);
    }
  }

  // console.log(dp);
  return dp[rows - 1][cols - 1];
}

function chaosInTheGridWithCats(grid) {
  let rows = grid.length;
  let cols = grid[0].length;


  
  return gridVal(rows - 1, cols - 1);
}

function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = new Array(rows).fill().map(() => new Array(cols).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "C") {
        dp[row][col] = 0;
      } else if (row === 0 && col === 0) {
        dp[row][col] = 1;
      } else {
        let fromTop = row > 0 ? dp[row - 1][col] : 0;
        let fromLeft = col > 0 ? dp[row][col - 1] : 0;
        dp[row][col] = fromTop + fromLeft;
      }
    }
  }

  return dp[rows - 1][cols - 1];
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);