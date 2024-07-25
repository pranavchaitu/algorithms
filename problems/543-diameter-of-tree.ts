// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// optimal - O(n)
function diameterOfBinaryTree(root: TreeNode | null): number {
    var res : number = 0
    function dfs(node) {
        if(!node) {
            return -1
        }
        const left = dfs(node.left)
        const right = dfs(node.right)
        res = Math.max(res,left+right+2)
        return 1 + Math.max(left,right)
    }
    dfs(root)
    return res
};

// brute force - O(n^2)
// function diameterOfBinaryTree(root: TreeNode | null): number {
//     return dfs(root)
// };

// function maxDepth(root : TreeNode) : number {
//     if(!root) return 0
//     return 1 + Math.max(maxDepth(root.left!),maxDepth(root.right!))
// }

// function diameterOfNode(root: TreeNode | null): number {
//     if(!root) {
//         return 0
//     }
//     const left = maxDepth(root.left!)
//     const right = maxDepth(root.right!)
//     return left + right
// };

// function dfs(root) {
//     let max = 0
//     function traverse(node) {
//         max = Math.max(max,diameterOfNode(node))
//         if(node.left) {
//             traverse(node.left)
//         }
//         if(node.right) {
//             traverse(node.right)
//         }
//     }
//     traverse(root)
//     return max   
// }