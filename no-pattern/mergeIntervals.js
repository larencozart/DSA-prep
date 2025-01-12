/*
https://leetcode.com/problems/merge-intervals/description/

Given an array of intervals where intervals[i] = [starti, endi], merge all 
overlapping intervals, and return an array of the non-overlapping intervals 
that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104




[1,3],[2,6],[8,10],[15,18]
*/

// BRUTE FORCE
function merge(intervals) {
  let mergedIntervals = [intervals[0]];

  for (let idx = 1; idx < intervals.length; idx += 1) {
    let currInterval = intervals[idx]; // [2, 6] curr
    let wasMerged = false;
    
    for (let idx = 0; idx < mergedIntervals.length; idx += 1) {
      let currMerged = mergedIntervals[idx]; // [1, 3]

      if (currInterval[0] <= currMerged[1]) {
        currMerged[0] = Math.min(currInterval[0], currMerged[0]);;
        currMerged[1] = Math.max(currInterval[1], currMerged[1]);;
        wasMerged = true;
      } 
    }

    if (!wasMerged) {
      mergedIntervals.push(currInterval);
    }
  }

  return mergedIntervals;
};


// WALK TRHOUGH with SRDJAN
/*
trick: sort by time + understanding overlap/non-overlap

case 1: having no-overlap: [1, 2] + [5, 6]

case 2: having over-lap
  - parital overlap [1, 5] + [4, 7]
  - full overlap [1, 8] + [3, 6]
*/
function merge(intervals) {
  if (!intervals.length) return [];
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
      // if there is an overlap
      // => since the array is sorted by start time, we just need to take the 
      //    max value of the end time (the val at indx 1)
      if (res[res.length - 1][1] >= intervals[i][0]) {
          res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
      } else {
        // if there is no overlap, push the interval to the result
          res.push(intervals[i]);
      }
  }
  return res;
}




console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]