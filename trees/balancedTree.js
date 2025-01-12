/*
https://leetcode.com/problems/balanced-binary-tree/description/

Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two 
subtrees of every node never differs by more than one.

Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: true

Example 2:
  Input: root = [1,2,2,3,3,null,null,4,4]
  Output: false

Example 3:
  Input: root = []
  Output: true


recursive case: difference in height between left and right side can't be more than 1 AND
                left subtre is balanced AND
                right subtree is balanced
*/
function isBalanced(root) {
  if (!root) return true;

  function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  return Math.abs(getHeight(root.left) - getHeight(root.right)) < 2 &&
         isBalanced(root.left) &&
         isBalanced(root.right);  
}


// Walkthrough with Srdjan
function isBalanced(root) {
  if (!root) return true;

  let leftHeight = maxHeight(root.left);
  let rightHeight = maxHeight(root.right);

  return Math.abs(leftHeight - rightHeight) < 2 &&
         isBalanced(root.left) &&
         isBalanced(root.right);
}

function maxHeight(node) {
  if (!node) return 0;

  return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
}

// Without double recusion using -1 as flag
function isBalanced(root) {
  function checkHeight(node) {
    if (node === null) return 0;

    const leftHeight = checkHeight(node.left);
    if (leftHeight === -1) return -1; // Left subtree is unbalanced

    const rightHeight = checkHeight(node.right);
    if (rightHeight === -1) return -1; // Right subtree is unbalanced

    if (Math.abs(leftHeight - rightHeight) > 1) return -1; // Current node is unbalanced

    return Math.max(leftHeight, rightHeight) + 1; // Return height of the subtree
  }

  return checkHeight(root) !== -1;
}



class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new TreeNode(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new TreeNode(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new TreeNode(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}



// Test Case 1
let tree1 = buildTree([]);
console.log(isBalanced(tree1) === true); // true


// Test Case 2
let tree2 = buildTree([1]);
console.log(isBalanced(tree2) === true); // true

// Test Case 3
let tree3 = buildTree([1, 2, 3]);
console.log(isBalanced(tree3) === true);


// Test Case 5
let tree5 = buildTree([3,9,20,null,null,15,7]);
console.log(isBalanced(tree5) === true);

// Test Case 6
let tree6 = buildTree([1,2,2,3,3,null,null,4,4]);
console.log(isBalanced(tree6) === false);