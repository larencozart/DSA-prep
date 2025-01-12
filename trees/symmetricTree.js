/*
https://leetcode.com/problems/symmetric-tree/description/

Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).



Input: root = [1,2,2,3,4,4,3]
Output: true


Input: root = [1,2,2,null,3,null,3]
Output: false


Constraints:
The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
*/    
// Pre-order DFS
function isSymmetric(root) {
  if (!root) return true;

  function traverse(left, right) {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;

    return traverse(left.left, right.right) && 
           traverse(left.right, right.left);
  }

  return traverse(root.left, root.right);
}


// Walk through with Srdjan
function isSymmetric(root) {
  // we don't need to check if there is a null root because we are always given
  // a non-null root


  // anytime you need to add more parameters you need to make a helper function
  function helper(left, right) {
    // sometimes you can't access val if it doesn't exist

    // shorter version
    if (!left || !right) return left === right;
    // longer version
    // if (!left && !right) return true;
    // if (!left || !right) return false;
    
    
    // recursive case
    return left.val === right.val &&
           helper(left.left, right.right) &&
           helper(left.right, right.left);


  }

  return helper(root.left, root.right);
}


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
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
const tree1 = buildTree([1,2,2,3,4,4,3]);
console.log(isSymmetric(tree1));

// Test Case 2
const tree2 = buildTree([1,2,2,null,3,null,3]);
console.log(isSymmetric(tree2));