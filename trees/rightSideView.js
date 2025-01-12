/*
https://leetcode.com/problems/binary-tree-right-side-view/description/

Given the root of a binary tree, imagine yourself standing 
on the right side of it, return the values of the nodes you 
can see ordered from top to bottom.

Example 1:
  Input: root = [1,2,3,null,5,null,4]
  Output: [1,3,4]

Example 2:
  Input: root = [1,2,3,4,null,null,null,5]
  Output: [1,3,4,5]

Example 3:
  Input: root = [1,null,3]
  Output: [1,3]

Example 4:
  Input: root = []
  Output: []

DFS - recursion
  preorder: NLR
  inorder: LNR
  postorder: LRN

BFS - queue
*/

// Need to use BFS
function rightSideView(root) {
  if (!root) return [];

  let rightSideNodes = [];
  let queue = [root];

  while(queue.length) {
    // we need to dequeue our nodes (with arrays shift)
    for (let i = 0; i < queue.length; i += 1) {
      let node = queue.shift();
        if (i === queue.length - 1) {
          rightSideNodes.push(node.val);
        }

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }

    }
  }

  return rightSideNodes;
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