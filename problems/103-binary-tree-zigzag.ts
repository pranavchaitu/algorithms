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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) {
        return []
    }
    const res : number[][] = []
    const queue = [root]
    var popped,i;
    var flag = true
    while(queue.length) {
        const level : number[] = []
        const len = queue.length
        for(i=0;i<len;i++) {
            popped = queue.shift()
            if(flag) {
                level.push(popped.val)
            } else {
                level.unshift(popped.val)
            }
            if(popped.left) queue.push(popped.left)
            if(popped.right) queue.push(popped.right)
        } 
        res.push(level)
        flag = !flag
    }
    return res
};