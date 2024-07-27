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


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!subRoot) return true
    if(!root) return false
    if(isSame(root,subRoot)) return true
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot) 
};

function isSame(p,q) {
    if(!p && !q) return true
    if(p && q && p.val === q.val) {
        return isSame(p.left,q.left) && isSame(p.right,q.right) 
    }
    return false
}

