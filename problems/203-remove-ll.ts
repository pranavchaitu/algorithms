// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function removeElements(head: ListNode | null, val: number): ListNode | null {
    while(head?.val == val) {
        head = head.next  
    }   
    var temp = head
    var next : ListNode | null
    while(head?.next) {
        next = head.next
        while(next?.val == val) {
            next = next.next
        }
        head.next = next
        head = next
    }
    return temp
};