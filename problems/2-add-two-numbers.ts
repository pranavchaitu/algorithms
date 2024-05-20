class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    var dummy = new ListNode()
    var current = dummy
    var sum : number;
    var carry = 0
    while(l1 || l2 || carry) {
        sum = 0
        if(l1) {
            sum += l1.val
            l1 = l1.next
        }
        if(l2) {
            sum += l2.val
            l2 = l2.next
        }
        sum += carry
        current.next = new ListNode(sum % 10)
        carry = Math.floor(sum/10)
        current = current.next
    }
    return dummy.next
};