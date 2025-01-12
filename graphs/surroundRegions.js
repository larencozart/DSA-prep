/*
https://leetcode.com/problems/surrounded-regions/description/

You are given an m x n matrix board containing letters 'X' and 
'O', capture regions that are surrounded:

Connect: 
A cell is connected to adjacent cells horizontally 
or vertically.

Region: 
To form a region connect every 'O' cell.

Surround: 
The region is surrounded with 'X' cells if you can 
connect the region with 'X' cells and none of the 
region cells are on the edge of the board.
To capture a surrounded region, replace all 
'O's with 'X's in-place within the original board. 
You do not need to return anything.

Example 1:
  Input: board = 
  [["X","X","X","X"],
   ["X","O","O","X"],
   ["X","X","O","X"],
   ["X","O","X","X"]]

  Output: 
  [["X","X","X","X"],
   ["X","X","X","X"],
   ["X","X","X","X"],
   ["X","O","X","X"]]

  Explanation:
  In the above diagram, the bottom region is not captured 
  because it is on the edge of the board and cannot be 
  surrounded.

Example 2:
  Input: board = [["X"]]
  Output: [["X"]]

 
Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.



Find all unsurrounded regions 
  - when you find an O
    => perform depth first search to find other Os that
       touch 
    => mark with a third letter
*/

function solve(board) {
  // iterate over board
  // dfs around board of the grid to
  // find Os touching edge => mark them with a diff char
  function dfs(row, col) {
    // make sure you are not out of bounds
    if (row < 0 || col < 0 ||
        row === grid.length || col === grid[0].length) return;
    
    // if you don't have an O, exit
    if (grid[row][col] !== "O") return;

    // now we are on an O, so convert it
    grid[row][col] == "V";

    // now check for connecting Os
    dfs(row -1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
    dfs(row, col - 1);

  }

  // iterate through board cells 
  // to now mark all Os remaining as X's since they don't touch
  // and remark the diff char as an O again
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board[0].length; c += 1) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }

      if (board[r][c] === "V") {
        board[r][c] = "O";
      }
    }
  }
}

// console.log(solve(
//   [["X","X","X","X"],
//   ["X","O","O","X"],
//   ["X","X","O","X"],
//   ["X","O","X","X"]]
// ));

// console.log(solve([["X"]])); // returns all cells as X

console.log(solve([
  ["X", "X", "X"],
  ["X", "O", "X"],
  ["X", "X", "X"],
])); // returns all cells as x