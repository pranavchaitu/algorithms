// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function sortList(head: ListNode | null): ListNode | null {
    var res : number[] = []
    var temp1 = head
    while(head) {
        res.push(head.val)
        head = head.next
    }
    var temp2 = temp1
    head = temp1
    res = res.sort((a,b) => a-b)
    for(var i of res) {
        head!.val = i
        head = head!.next
    }
    return temp2
};