// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const temp = new ListNode()
    var tail = temp
    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }  
    if(l1) {
        tail.next = l1
    }else if(l2) {
        tail.next = l2
    }
    return temp.next
};
