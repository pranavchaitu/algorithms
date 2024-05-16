/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var slow = head
    var fast = head
    for(let i=0;i<n;i++){
        fast = fast.next
        if(!fast) return head.next
    }    
    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }
    //here slow is prev of del node
    var delNode = slow.next
    slow.next = slow.next.next
    delNode = null
    return head
};