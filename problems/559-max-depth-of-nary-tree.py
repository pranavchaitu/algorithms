class Node:
    def __init__(self, val = None, children = []):
        self.val = val
        self.children = children

class Solution:
    @staticmethod
    def maxDepth(root: 'Node') -> int:
        if not root:
            return 0
        m = 0
        for node in root.children:
            m = max(m,Solution.maxDepth(node))
        return 1 + m

root = Node(1,[Node(2),Node(3)])
print(Solution.maxDepth(root))