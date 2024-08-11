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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if(!nums.length) return null
    let mid = Math.floor(nums.length/2)
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0,mid))
    root.right = sortedArrayToBST(nums.slice(mid+1,nums.length))
    return root
}

// function sortedArrayToBST(nums: number[]): TreeNode | null {
//     if(!nums.length) {
//         return null
//     }
//     if(nums.length == 1) {
//         return new TreeNode(nums[0])
//     }
//     const len = nums.length;
//     if(len % 2) {
//         const mid = Math.floor(len/2)
//         const midNode = new TreeNode(mid)
//         // middle is root
//         const left = nums.slice(0,mid)
//         const right = nums.slice(mid+1,len)
//         const leftTree = createPart(left)
//         const rightTree = createPart(right)
//         midNode.left = leftTree
//         midNode.right = rightTree
//         return midNode;
//     } else {
//         // even
//     }   
// };

// function createPart(nums : number[]) : TreeNode | null {
//     let root : TreeNode | null = null
//     for(var i of nums) {
//         const newNode = new TreeNode(i)
//         if(!root) {
//             root = newNode
//         } else {
//             var cur = root
//             while(cur) {
//                 if(i < root.val) {
//                     if(!cur.left) {
//                         cur.left = newNode
//                         break;                        
//                     }
//                     cur = cur.left
//                 } else if(i > root.val) {
//                     if(!cur.right) {
//                         cur.right = newNode
//                         break;                        
//                     }
//                     cur = cur.right
//                 }
//             }
//         }
//     }
//     return root
// }
