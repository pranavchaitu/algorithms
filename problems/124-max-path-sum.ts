function maxPathSum(root: TreeNode | null): number {
    var res = 0
    function dfs(node : TreeNode) : number {
        if(!node) return 0
        var maxLeft = Math.max(dfs(node.left!),0)
        var maxRight = Math.max(dfs(node.right!),0)
        // comparing max with split
        res = Math.max(res,(node.val+maxLeft+maxRight))
        return node.val + Math.max(maxLeft,maxRight)
    }
    dfs(root!)
    return res
};