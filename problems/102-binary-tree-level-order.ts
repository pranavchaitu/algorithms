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


function levelOrder(root: TreeNode | null): number[][] {
    if(!root) {
        return []
    }
    const res : number[][]  = []
    const queue : TreeNode[] = [root]
    var len : number;
    var popped : TreeNode ;
    while(queue.length) {
        res.push(queue.map((q) => q.val))
        len = queue.length
        for(let i=0;i<len;i++) {
            popped = queue.shift()!
            if(popped.left) {
                queue.push(popped.left)
            }
            if(popped.right) {
                queue.push(popped.right)
            }
        }
    }
    return res
};