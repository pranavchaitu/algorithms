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


// Encodes a tree to a single string.

function serialize(root: TreeNode | null): string {
    const res : Array<number|string> = []
    function dfs(node : TreeNode) {
        if(!node) {
            res.push("N")
            return;
        }
        res.push(node.val)
        dfs(node.left!)
        dfs(node.right!)
    }
    dfs(root!)
    return res.toString()
};

// Decodes your encoded data to tree.

function deserialize(data: string): TreeNode | null {
    const arr = data.split(',')
    var i = 0
    function dfs() {
        if(arr[i] == "N") {
            i += 1
            return null
        }
        const node = new TreeNode(parseInt(arr[i]))
        i += 1
        node.left = dfs()
        node.right = dfs()
        return node
    }
    return dfs() 
};


// Your functions will be called as such:
// deserialize(serialize(root));

