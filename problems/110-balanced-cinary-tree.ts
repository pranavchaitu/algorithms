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

function isBalanced(root: TreeNode | null): boolean {
    var isBalanced = true
    function dfs(node) {
        if(!node) {
            return 0
        }
        const left = dfs(node.left)
        const right = dfs(node.right)
        const res = Math.abs(left - right)
        if(res > 1) {
            isBalanced = false
        }
        return 1 + Math.max(left,right)
    }
    dfs(root)
    return isBalanced
};