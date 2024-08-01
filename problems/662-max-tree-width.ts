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
function widthOfBinaryTree(root: TreeNode | null): number {
        if(!root) return 0
        var max = 0
        const queue : [TreeNode,number,number][] = [[root,1,0]]
        var prevLev = 0;
        var prevNum = 1;
        while(queue.length) {
            const [node,num,level] = queue.shift()
            if(level > prevLev) {
                prevLev = level;
                prevNum = num
            }
            max = Math.max(max,num-prevNum+1)
            if(node.left) {
                queue.push([node.left,num*2,level+1])
            }
            if(node.right) {
                queue.push([node.right,(num*2)+1,level+1])
            }
        }
        return max
}