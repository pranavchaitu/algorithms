/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    if(!root) {
        return []
    }
    const res : number[] = []
    const queue = [root]
    var popped : TreeNode
    while(queue.length) {
        const len = queue.length
        res.push(queue[0].val)
        for(let i=0;i<len;i++) {
            popped = queue.pop()!
            if(popped.left) {
                queue.unshift(popped.left)
            }
            if(popped.right) {
                queue.unshift(popped.right)
            }
        }
    }
    return res
};



// function rightSideView(root: TreeNode | null): number[] {
//     const res = []
//     function helper(node) {
//         if(!node) {
//             return
//         }
//         res.unshift(node.val)
//         if(node.right) {
//             helper(node.right)
//         } else {
//             helper(node.left)
//         }
//     }
//     helper(root)
//     return res
// };