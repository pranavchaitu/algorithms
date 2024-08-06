class TreeNode<A>{
    val : A;
    left : TreeNode<A> | null;
    right : TreeNode<A> | null;
    constructor(val : A) {
        this.left = null
        this.right = null
        this.val = val
    }
}

class Solution<A>{
    isLeaf(root : TreeNode<A>) {
        return !root.left && !root.right
    }
    traverseLeft(root : TreeNode<A>,res : A[]) {
        var current = root.left
        while(current) {
            if(!this.isLeaf(current)) {
                res.push(current.val)
            }
            if(current.left) {
                current = current.left
            } else {
                current = current.right
            }
        }
    }
    traverseRight(root : TreeNode<A>,res : A[]) {
        var current = root.right
        var temp : A[] = []
        while(current) {
            if(!this.isLeaf(current)) {
                temp.push(current.val)
            }
            if(current.right) {
                current = current.right
            } else {
                current = current.left
            }
        }
        for(var i=temp.length-1;i>=0;i--) {
            res.push(temp[i])
        }
    }
    traverseLeafs(root : TreeNode<A>,res : A[]) {
        if(this.isLeaf(root)) {
            res.push(root.val)
            return;
        }
        if(root.left) this.traverseLeafs(root.left,res)
        if(root.right) this.traverseLeafs(root.right,res)
    }
    boundaryTraversal(root : TreeNode<A>) : A[] {
        const res : A[] = [];
        if(!root) {
            return []
        }
        if(this.isLeaf(root)) return [root.val]
        res.push(root.val)
        this.traverseLeft(root,res)
        this.traverseLeafs(root,res)
        this.traverseRight(root,res)
        return res
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const sol = new Solution()
const res = sol.boundaryTraversal(root)
console.log(res);
