class TreeNode:
    def __init__(self,val=0,left=None,right=None):
        self.val = val
        self.left = left
        self.right = right
    
class BST:
    def __init__(self):
        self.root = None

    def insert(self,val):
        newnode = TreeNode(val)
        if not self.root:
            self.root = newnode
            return self.root
        cur = self.root
        while True:
            if val < cur.val:
                if cur.left:
                    cur = cur.left
                else:
                    cur.left = newnode
                    return self.root
            elif val > cur.val:
                if cur.right:
                    cur = cur.right
                else:
                    cur.right = newnode
                    return self.root

    def delete(self,cur,key):   
        if key < cur.val:
            cur.left = self.delete(cur.left,key)
        elif key > cur.val:
            cur.right = self.delete(cur.right,key)
        else:
            if not cur.left:
                return cur.right
            if not cur.right:
                return cur.left
            temp = cur.right
            while temp.left:
                temp = temp.left
            cur.val = temp.val
            cur.right = self.delete(cur.right,temp.val)
        return cur

    def dfs(self):
        res = []
        def helper(node):
            if not node:
                return None
            helper(node.left)
            res.append(node.val)
            helper(node.right)
        helper(self.root)
        return res

tree = BST()
tree.insert(8)
tree.insert(15)
tree.insert(13)
tree.insert(9)
tree.insert(4)
tree.insert(10)
tree.insert(14)
print(tree.dfs())
tree.delete(tree.root,14)
print(tree.dfs())
