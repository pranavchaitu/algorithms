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

// optimal
function isValidBST(root: TreeNode | null): boolean {
    function helper(node,left,right) {
        if(!node) return true
        if(!(node.val > left && node.val < right)) {
            return false
        }
        return (helper(node.left,left,node.val) &&
                helper(node.right,node.val,right))
    }
    return helper(root,-Infinity,Infinity)
}

// this lacks the case of root check and go
// function isValidBST(root: TreeNode | null): boolean {
//     if(!root) {
//         return true
//     }
//     if(!root.left && !root.right) return true
//     if(!root.left && (root.right.val <= root.val)) return false
//     if(!root.right && (root.left.val >= root.val)) return false
//     if(root.left && !root.right) {
//         return true
//     }
//     if(!root.left && root.right) {
//         return true
//     }
//     if((root.left.val < root.val) && (root.right.val > root.val)) {
//         return isValidBST(root.left) && isValidBST(root.right)
//     }
//     return false
// };
