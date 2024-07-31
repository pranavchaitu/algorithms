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


// optimal
function kthSmallest(root: TreeNode | null, k: number): number {
    var res = -1
    function inOrder(node : TreeNode) {
        if(!node) return 
        inOrder(node.left!)
        k -= 1
        if(!k) {
            res = node.val
            return
        }
        inOrder(node.right!)
    }
    inOrder(root!)
    return res
}

// brute force
// function kthSmallest(root: TreeNode | null, k: number): number {
//     function dfs(node) {
//         if(!node) return []
//         var res = []
//         res.push(node.val)
//         res = res.concat(dfs(node.left))
//         res = res.concat(dfs(node.right))
//         return res
//     }
//     return (dfs(root).sort((a,b) => a-b)[k-1])
// };