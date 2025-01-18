# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root.left and not root.right:
            return 0
        s = 0
        def dfs(node, isleft):
            nonlocal s
            if not node:
                return
            if isleft and not node.left and not node.right:
                s += node.val
                return
            dfs(node.left,True)            
            dfs(node.right,False)            
        dfs(root.left, True)
        dfs(root.right, False)
        return s
