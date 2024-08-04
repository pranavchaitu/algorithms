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

function findTilt(root: TreeNode | null): number {
    var sum = 0
    function dfs(node : TreeNode) {
        if(!node) return
        const val = Math.abs((getSum(node.left) ?? 0)-(getSum(node.right) ?? 0))
        sum += val
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    }
    dfs(root)
    return sum
};

function getSum(root : TreeNode) : number {
    if(!root) return 0
    var res = root.val;
    res += getSum(root.left)
    res += getSum(root.right)
    return res
}