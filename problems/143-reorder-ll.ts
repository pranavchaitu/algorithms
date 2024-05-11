// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


//  Do not return anything, modify head in-place instead.

function reorderList(head: ListNode | null): void {
    if(!head || !head.next) return;
    var mid = findMid(head)
    var l1 = head
    var l2 = findRev(mid.next)
    mid.next = null

    var n1,n2
    while(l1 && l2) { 
        n1 = l1.next
        n2 = l2.next
        l1.next = l2
        l2.next = n1
        l1 = n1
        l2 = n2
    }
};

function findMid(head : ListNode) : ListNode {
    var fast = head
    var slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

function findRev(current : ListNode) : ListNode {
    var prev = null
    var next;
    while(current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}



