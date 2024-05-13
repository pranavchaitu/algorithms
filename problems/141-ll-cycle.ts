// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

//one step closer (optimal)
function hasCycle(head: ListNode | null): boolean {
    var slow = head
    var fast = head
    while(fast && fast.next) {
        slow = slow!.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};

//bruteforce
// function hasCycle(head: ListNode | null): boolean {
//     let map = new Map()
//     while(head){
//         if(map.has(head)){
//             return true
//         }
//         map.set(head,true) 
//         head = head.next
//     }
//     return false
// };