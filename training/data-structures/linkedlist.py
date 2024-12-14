class Node:
    def __init__(self,val):
        self.val = val 
        self.next = None
    
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def insert(self,val):
        node = Node(val)
        if not self.head and not self.tail:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.length += 1
    def print(self):
        if not self.head:
            return
        cur = self.head
        res = ""
        while cur:
            res += str(cur.val) + "->"
            print(cur.val,end="->")
            cur = cur.next
        return print(res[:-2])
    def middle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        return slow.val

list = LinkedList()

list.insert(2)
list.insert(3)
list.insert(4)    
list.insert(5)
list.insert(6)
list.insert(7)
list.insert(9)
list.insert(10)
# print(list)
# print(list.head.val, list.tail.val, list.length)
list.print()
print(list.middle())