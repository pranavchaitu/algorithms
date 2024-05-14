// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

//optimal
function detectCycle(head: ListNode | null): ListNode | null {
    var temp = head
    var slow = head
    var fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            slow = temp
            //from intresection to start
            while(slow !== fast){
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
};

//bruteforce
//hashmap
