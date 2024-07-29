// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }


function goodNodes(root: TreeNode | null): number {
    function dfs(node : TreeNode,max : number) {
        if(!node) {
            return 0
        }
        var res = 0
        if(node.val >= max) {
            res = 1
            max = node.val
        }
        res += dfs(node.left!,max) 
        res += dfs(node.right!,max)
        return res 
    }
    return dfs(root!,root!.val)
};