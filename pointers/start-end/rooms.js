// Meeting Room II


// Given an array of meeting time intervals consisting of start and end times 
// [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms 
// required. 

// Example 1: 

// Input: [[0, 30],[5, 10],[15, 20]] 
// Output: 2 

// Example 2: 

// Input: [[7,10],[2,4]] 
// Output: 1

/*
base case: 
  - one room => return 1
  - two rooms => 

recursive case: 
  - 

Mason:
A useful mental model for this one is thinking of the lowest number at either pointer 
as the current actual time. When the lowest number of the two is a start time, a new 
meeting room needs to open since the next meeting that will end hasn’t ended yet. When 
the lowest number is an end time, that meeting is ending, so the room can be freed up
*/

function rooms(meetings) {
  // sort meetings by start time
  meetings.sort((a, b) => a[0] - b[0]);

  let currMeetings = [meetings[0]];

  for(let idx = 1; idx < meetings.length; idx += 1) {
    console.log("currMeetings:", currMeetings);
    let newMeeting = meetings[idx];
    // check if any meetings have ended & remove them from queue
    currMeetings = currMeetings.filter(meeting => {
      console.log("end time:", meeting[1], "new start:", newMeeting[0]);
      return meeting[1] > newMeeting[0];
    });

   console.log("filtered:", currMeetings);

    currMeetings.push(newMeeting);
    
  }

  return currMeetings.length;
}


// SRDJAN
function rooms(intervals) {
  if (!intervals.length) return 0;

  // trick is to sort start times & end times separately
  const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b);

  let startPointer = 0, endPointer = 0, rooms = 0;

  while (startPointer < intervals.length) {
      if (startTimes[startPointer] >= endTimes[endPointer]) {
          rooms--;
          endPointer++;
      }
      rooms++;
      startPointer++;
  }

  return rooms;
}



function print(m) {
  console.log(m);
}

// Test cases
print(rooms([[0, 30], [5, 10], [15, 20]]) == 2)                   
// print(rooms([[7, 10], [2, 4]]) == 1)                               
// print(rooms([[1, 2], [3, 4], [5, 6]]) == 1)                         
// print(rooms([[1, 4], [2, 5], [3, 6]]) == 3)               
// print(rooms([[1, 3], [3, 6], [6, 8]]) == 1)                          
// print(rooms([[1, 10]]) == 1)                                        
// print(rooms([[1, 3], [2, 4], [4, 6]]) == 2)                          
// print(rooms([[1, 5], [2, 3], [4, 6], [5, 7]]) == 2)                
// print(rooms([[0, 5], [1, 3], [2, 6], [4, 7], [5, 9], [8, 10]]) == 3) 
// print(rooms([[1, 2], [2, 3], [3, 4], [4, 5]]) == 1)            
// print(rooms([[1, 20], [5, 10], [11, 15], [16, 18]]) == 2)         
// print(rooms([[1, 4], [1, 3], [1, 2], [1, 5]]) == 4) 

// All test cases should print True
