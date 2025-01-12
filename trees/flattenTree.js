/*
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

Given the root of a binary tree, flatten the tree 
into a "linked list":

The "linked list" should use the same TreeNode class 
where the right child pointer points to the next node 
in the list and the left child pointer is always null.
The "linked list" should be in the same order as a 
pre-order traversal of the binary tree.


rules:
- use preorder DFS
- use treeNode class:
   (right points to next node)
   (left points to null always)
- modify root in place (root will now be the modified tree)

*/

// with an array
function flatten(root) {
  if (!root) return null;
  const queue = [];

  function dfs(node) {
    if (node === null) return;
    queue.push(node);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  let last = root;
  for (let i = 1; i < queue.length; i++) {
    last.left = null;
    last.right = queue[i];
    last = queue[i]
  }
};

// post order
function flatten(root) {
  if (!root) return;

  function traverse(node) {
    if (!node) return null;

    let leftMost = traverse(node.left);
    let rightMost = traverse(node.right);

    if (leftMost) {
      leftMost.right = node.right;
      node.right = node.left;
      node.left = null;
    }

    if (rightMost) return rightMost;
    else if (leftMost) return leftMost;
    else return node;
    // return rightMost || leftMost || node;
  }

  traverse(root);
}

// pre order - Srdjan walk through
/*

root.right = root.left
root.left = null;

*/
function flatten(root) {

  function traverse(node) {
    if (!node) return null;

    let left = node.left;
    let right = node.right
    root.left = null;
    root.right = left;

    let rightMost = node;
    while(rightMost.right !== null) {
      rightMost = rightMost.right;
    }

    rightMost.right = right;


    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
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

// Print treeLL
function printTreeLL(root) {

}

//Test cases

let tree1 = buildTree([1,2,5,3,4,null,6]);
console.log(flatten(tree1)); // [1,null,2,null,3,null,4,null,5,null,6]

let tree2 = buildTree([]); 
console.log(flatten(tree2)); // []

let tree3 = buildTree([0]); 
console.log(flatten(tree3)); // [0]