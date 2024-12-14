# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNodes(self, head):
        # reverse
        prev = None
        cur = head
        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        head = prev
        cur = head
        prev = ListNode()
        m = -float('inf')
        while cur:
            if cur.val >= m:
                m = cur.val
                prev.next = cur
                prev = cur
            cur = cur.next
        
        # for splitting at the end
        prev.next = None
        
        # again reverse(org)
        prev = None
        cur = head
        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        return prev
