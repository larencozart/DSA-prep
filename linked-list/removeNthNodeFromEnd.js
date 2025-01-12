/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from the end 
of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/


class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

// Mine
// function removeNthFromEnd(head, n) {
//   const dummy = new ListNode(0);
//   dummy.next = head;

//   let first = dummy;  // first
//   let second = dummy;   // second

//   // just go to the node right after the one we are looking for
//   // no need to go all the way to the end

//   for (let idx = 0; idx < n + 1; idx += 1) {
//     first = first.next;
//   }
// };


// // Jim
// var removeNthFromEnd = function(head, n) {
//   let total = 0;
//   let current = head;
//   while (current) {
//       total++;
//       current = current.next;
//   }

//   let nthFromFront = total - n;
//   let dummy = new ListNode();
//   dummy.next = head;

//   let prev = dummy;
//   current = head;

//   while (current) {
//       if (nthFromFront === 0) {
//          prev.next = current.next;
//          return dummy.next;
//       } else { 
//           nthFromFront--;
//           prev = current;
//           current = current.next;
//       }
//   }

// };

// // Mason
// var removeNthFromEnd = function(head, n) {
//   let node = head;
//   let list = [];

//   while(node) {
//     list.push(node);
//     node = node.next
//   }

//   const len = list.length;
//   const prev = list[len - n - 1] || new ListNode(null, list[len - n]);

//   prev.next = list[len - n].next;

//   if (prev.val === null && prev.next === null) return null;
//   if (len === n) return prev.next;
//   return head;
// };


// Srdjan + walkthrough
// SLOW + FAST pointers
/*
fast should be one past the node we want to remove
  => move n + 1 amount of times

slow should be one before the node we want to remove
  => move n - 1 amount of times


  1. move fast n + 1 times
  2. 

*/
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  
  let first = dummy;
  let second = dummy;
  
  for (let i = 0; i < n + 1; i++) {
      first = first.next;
  }
  
  while (first) {
      first = first.next;
      second = second.next;
  }
  
  second.next = second.next.next;
  
  return dummy.next;
}


function listToArray(head) {
  let prev = null;  
  let curr = head;
  let arr = [];

  while (curr) {
    arr.push(curr.val)
    prev = curr;
    curr = curr.next;
  }

  return arr;
}

function listToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
      result.push(current.val);
      current = current.next;
  }

  return result;
}

// Test case 1 ------------
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

removeNthFromEnd(head1, 2);
console.log(listToArray(head1));
// [1, 2, 3, 5]


// Test case 2 -------------
const head2 = new ListNode(1);

removeNthFromEnd(head2, 1);
console.log(listToArray(head2));
// []


// Test case 3 -------------
const head3 = new ListNode(1);
head3.next = new ListNode(2);

removeNthFromEnd(head3, 1);
console.log(listToArray(head3));
// [1]