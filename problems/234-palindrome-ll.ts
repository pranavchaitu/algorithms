// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// optimal
function isPalindrome(head: ListNode | null): boolean {
    if(!head || !head.next) return true
    var mid = findMid(head)
    var l1 = head
    var l2 = findRev(mid)
    while(l2){
        if(l1.val !== l2.val){
            return false
        }
        l1 = l1.next
        l2 = l2.next
    }
    return true
};

function findRev(current : ListNode) : ListNode {
    var prev = null
    var next
    while(current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

function findMid(current : ListNode) : ListNode {
    var slow = current
    var fast = current
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

//bruteforce
// function isPalindrome(head: ListNode | null): boolean {
//     var arr = []
//     var temp = head
//     while(head) {
//         arr.push(head.val)
//         head = head.next
//     } 
//     head = temp
//     while(head){
//         if(head.val !== arr.pop()){
//             return false
//         }
//         head = head.next
//     }
//     return true
// };
