/*
https://leetcode.com/problems/rotting-oranges/description/


You are given an m x n grid where each cell can have one of 
three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally 
adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse 
until no cell has a fresh orange. If this is impossible, 
return -1.



Example 1:
    Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
    Output: 4

Example 2:
  Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
  Output: -1
  Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
  Input: grid = [[0,2]]
  Output: 0
  Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.


Needs BFS
- and a queue
*/


// Srdjan
const orangesRotting = (grid) => {
  const rows = grid.length;
  if (rows === 0) {
      return -1;
  }

  const cols = grid[0].length;
  let freshCnt = 0;
  const rotten = [];

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 2) {
              rotten.push([r, c]);
          } else if (grid[r][c] === 1) {
              freshCnt++;
          }
      }
  }

  let minutesPassed = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (rotten.length && freshCnt) {
      const size = rotten.length;
      for (let i = 0; i < size; i++) {
          const [x, y] = rotten.shift();

          for (const [dx, dy] of directions) {
              const xx = x + dx;
              const yy = y + dy;
              if (xx < 0 || xx === rows || yy < 0 || yy === cols) {
                  continue;
              }
              if (grid[xx][yy] === 0 || grid[xx][yy] === 2) {
                  continue;
              }

              grid[xx][yy] = 2;
              freshCnt--;
              rotten.push([xx, yy]);
          }
      }
      minutesPassed++;
  }

  return freshCnt ? -1 : minutesPassed;
};
