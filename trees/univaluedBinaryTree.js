/*
https://leetcode.com/problems/univalued-binary-tree/description/

A binary tree is uni-valued if every node in the tree has the same value.
Given the root of a binary tree, return true if the given tree is uni-valued
or false otherwise.

 
Example 1:
  Input: root = [1,1,1,1,1,null,1]
  Output: true

Example 2:
  Input: root = [2,2,2,5,2]
  Output: false
 
Constraints:

The number of nodes in the tree is in the range [1, 100].
0 <= Node.val < 100
*/

// BFS
function isUnivalTree(root) {
  if (!root) return true;
  let target = root.val;
  let queue = [root]; 

  while (queue.length) {
    let node = queue.shift(); // dequeue 

    if (node.val !== target) return false;

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return true;
}

// DFS
/*
recursive def: a univalued tree is a tree where a node is the same val
              of the root, and left child is a univalued tree and 
              right child is a univalued tree

*/

function isUnivalTree(root) {

  function helper(node, val) {
    if (!node) return true;

    return node.val === val 
            && helper(node.left, val) 
            && helper(node.right, val);
  }

  helper(root, root.val);
}