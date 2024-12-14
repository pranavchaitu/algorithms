# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def swapPairs(self, head):    
    if not head or not head.next:
        return head
    cur = head
    dummy = ListNode()  
    prev = dummy
    while cur and cur.next:
        prev.next = cur.next
        temp = cur.next.next
        cur.next.next = cur
        prev = cur
        cur.next = temp
        cur = cur.next
    return dummy.next

list = ListNode(1,ListNode(2))
ans = swapPairs(list)
print(ans)