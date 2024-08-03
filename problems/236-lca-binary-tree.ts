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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!root) return null
    if(root == q || root == p ) return root
    const left = lowestCommonAncestor(root.left,p,q)
    const right = lowestCommonAncestor(root.right,p,q)
    if(!left) {
        return right
    } else if (!right) {
        return left
    } else {
        return root
    }
}


// brute force
// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     while(root) {
//         if(hasIt(root.right,p) && hasIt(root.right,q)) {
//             root = root.right
//         } else if(hasIt(root.left,p) && hasIt(root.left,q)) {
//             root = root.left
//         } else {
//             return root
//         }
//     }
//     return null
// };

// function hasIt(root,node) {
//     if(!root) {
//         return false
//     }
//     if(root === node) {
//         return true
//     }
//     return hasIt(root.left,node) || hasIt(root.right,node)
// }