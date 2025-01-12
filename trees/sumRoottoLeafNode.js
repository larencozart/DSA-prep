/*
https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

*/


// no math
function sumNumbers(root) {
  let result = 0;

  function dfs(node, digits) {
    digits += String(node.val);

    if (!node.left && !node.right) {
      result += Number(digits);
      return;
    }

    if (node.left) {
      dfs(node.left, digits);
    }

    if (node.right) {
      dfs(node.right, digits);
    }
    
    return;
  }

  dfs(root, "");
  return result;
}



// Srdjan + math

function sumNumbers(root) {
  let result = 0;

  function dfs(node, currentSum) {
    if (!node) return 0;

    currentSum += node.val;

    if (!node.left && !node.right) {
      result += currentSum;
    }

    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  }

}