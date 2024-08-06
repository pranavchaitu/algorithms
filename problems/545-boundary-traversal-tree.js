                            
// Node structure for the binary tree
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to check if a node is a leaf
    isLeaf(root) {
        return !root.left && !root.right;
    }

    // Function to add the left boundary of the tree
    addLeftBoundary(root, res) {
        let curr = root.left;
        while (curr) {
            // If the current node is not a leaf, add its value to the result
            if (!this.isLeaf(curr)) {
                res.push(curr.val);
            }
            // Move to the left child if it exists, otherwise move to the right child
            if (curr.left) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
    }

    // Function to add the right boundary of the tree
    addRightBoundary(root, res) {
        let curr = root.right;
        let temp = [];
        while (curr) {
            // If the current node is not a leaf, add its value to a temporary vector
            if (!this.isLeaf(curr)) {
                temp.push(curr.val);
            }
            // Move to the right child if it exists, otherwise move to the left child
            if (curr.right) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        // Reverse and add the values from the temporary vector to the result
        for (let i = temp.length - 1; i >= 0; --i) {
            res.push(temp[i]);
        }
    }

    // Function to add the leaves of the tree
    addLeaves(root, res) {
        // If the current node is a leaf, add its value to the result
        if (this.isLeaf(root)) {
            res.push(root.val);
            return;
        }
        // Recursively add leaves of the left and right subtrees
        if (root.left) {
            this.addLeaves(root.left, res);
        }
        if (root.right) {
            this.addLeaves(root.right, res);
        }
    }

    // Main function to perform the boundary traversal of the binary tree
    printBoundary(root) {
        let res = [];
        if (!root) {
            return res;
        }
        // If the root is not a leaf, add its value to the result
        if (!this.isLeaf(root)) {
            res.push(root.val);
        }

        // Add the left boundary, leaves, and right boundary in order
        this.addLeftBoundary(root, res);
        this.addLeaves(root, res);
        this.addRightBoundary(root, res);

        return res;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const sol = new Solution()
const res = sol.printBoundary(root)
console.log(res);

                            
                        