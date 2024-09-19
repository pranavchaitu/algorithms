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


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    function dfs(root : TreeNode ,sum : number) {
        if(!root) return false
        sum += root.val
        if(!root.left && !root.right && sum == targetSum) {
            return true
        } 
        return dfs(root.left!,sum) || dfs(root.right!,sum)    
    }
    return dfs(root!,0)
};