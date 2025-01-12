//      1
//     / \
//    2   3
//   / \
//  4   5
// => 

function getHeight(node) {
    if (!node) return 0;
    
    return 1 + Math.max(getHeight(node.left), getHeight(node.right))
}
      
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
      
      // Helper function for test cases
function buildTree(arr) {
    if (arr.length === 0) {
        return null;
    }

    const nodes = [];

    const val = arr.shift();
    const root = new Node(val);
    nodes.push(root);

    while (arr.length > 0) {
        const curr = nodes.shift();

        const leftVal = arr.shift();
        if (leftVal !== null) {
            curr.left = new Node(leftVal);
            nodes.push(curr.left);
        }

        if (arr.length > 0) {
            const rightVal = arr.shift();
                if (rightVal !== null) {
                    curr.right = new Node(rightVal);
                    nodes.push(curr.right);
                }
        }
    }

    return root;
}
      
// Test Cases

const tree1 = buildTree([1]);
console.log(getHeight(tree1) === 1);

const tree2 = buildTree([1, 2, 3, null, null, 4, 5]);
console.log(getHeight(tree2) === 3);

const tree3 = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.log(getHeight(tree3) === 3);

const tree4 = buildTree([1, 2, 3, null, null, 4, 5, null, null, null, 6]);
console.log(getHeight(tree4) === 4);

const tree5 = buildTree([1, 2, null, 3, null, 4, null, 5, 6, null, null, null, 7]);
console.log(getHeight(tree5) === 6);

const tree6 = buildTree([1, 2, null, 3, null, 4, null, 5, null, 6, 8, null, 7, null, 9, null, null, null, 10]);
console.log(getHeight(tree6) === 8);
// All test cases should log true