/*
https://leetcode.com/problems/pacific-atlantic-water-flow/description/

There is an m x n rectangular island that borders both the 
Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches 
the island's left and top edges, and the Atlantic Ocean touches 
the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are 
given an m x n integer matrix heights where heights[r][c] 
represents the height above sea level of the cell at coordinate 
(r, c).

The island receives a lot of rain, and the rain water can flow 
to neighboring cells directly north, south, east, and west if 
the neighboring cell's height is less than or equal to the current 
cell's height. Water can flow from any cell adjacent to an ocean 
into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

*/

function pacificAtlantic(heights) {
  let result = [];
  let memo = new Map();

  function dfs(r, c) {
    // base
    if (r < 0 || c < 0 ||
      r === grid.length || c === grid[0].length) return;

    if (memo.has([r, c]) && 
        memo.get([r, c]).includes("P") &&
        memo.get([r, c]).includes("A")) {
          result.push([r, c]);
          return;
        }


    // recursive
    // r- 1 + c - 1 => Pacific
    // r + 1 , c + 1 = Atl
    if (r - 1 < 0 || c - 1 < 0) {
      // we hit the Pacific

    } 


    // process
    // traverse all sides
  }

  for (let r = 0; r < heights.length; r += 1) {
    for (let c = 0; c < heights[0].length; c += 1) {

      dfs(r, c);
    }
  }


  return result;
}




// Srdjan
function pacificAtlantic(heights) {

}

/*
trick => you need to look at regions that flow up
        althoug the problem says flow down
      => you only need to do dfs for border squares

logic: => 4 loops total

FIRST LOOP
have set variable "Pacific Reachable"
  - find all pacific reachable in first iteration
  - iterate over first row across and first column down

SECOND LOOP
have set variable "Atlantic Reachable"
  - find all atlantic reachable in second loop
  - iterate over last row across and last column down

* if the number touching is the same or larger it can reach
*/