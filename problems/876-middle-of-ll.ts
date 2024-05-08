
//  Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function middleNode(head: ListNode | null): ListNode | null {
    var length = 1;
    var tempHead = head
    while(tempHead) {
        length += 1
        tempHead = tempHead.next
    }
    let mid = Math.ceil(length/2)
    console.log(mid)
    for(var i=1;i<mid;i++){
        head = head.next
    }
    return head;
};
