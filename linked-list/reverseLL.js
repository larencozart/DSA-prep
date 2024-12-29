// Given the head of a linked list, reverse the list and return it.

// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/*

null <- 1 -> 2 -> 3 -> 4 -> null
       ^prev^curr ^nN

*/

function reverseLinkedList(head) {
  if (!head) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;

    // turn around
    curr.next = prev;

    // slide prev and curr
    prev = curr;
    curr = nextNode;
  }

  let newHead = prev;
  return newHead;
}



// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// Test case 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

console.log("Input: ", printList(head1));
console.log("Output:", printList(reverseLinkedList(head1)));
// Input:  1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null


// L solution second time around on Leetcode

// class ListNode {
//     val?: number;
//     next?: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val ?? 0;
//         this.next = next ?? null;
//     }
// }

// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head) return null;

//   let curr = head;
//   let prev = null;

//   while (curr) {
//       let nextNode = curr.next;
//       curr.next = prev;

//       prev = curr;
//       curr = nextNode;
//   }

//   return prev;
// };