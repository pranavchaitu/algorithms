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

// recursively
function maxDepth(root: TreeNode | null): number {
    if(!root) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right))
};


// iteratively
// function maxDepth(root: TreeNode | null): number {
//     if(!root) {
//         return 0
//     }
//     const queue = [root]
//     var popped : TreeNode;
//     var depth = 0
//     var len : number
//     while(queue.length) {
//         len = queue.length
//         for(var i=0;i<len;i++) {
//             popped = queue.pop()
//             if(popped.left) {
//                 queue.unshift(popped.left)
//             }
//             if(popped.right) {
//                 queue.unshift(popped.right)
//             }
//         }
//         depth += 1
//     }
//     return depth
// };