/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = 0
    let num2 = 0
    while(l1 && l2){
        num1 = num1*10 + l1.val
        num2 = num2*10 + l2.val
        l1 = l1.next
        l2 = l2.next
    }
    if(l1) {
        while(l1){
            num1 = num1*10 + l1.val
            l1 = l1.next
        }
    } else if(l2){
        num2 = num2*10 + l2.val
        l2 = l2.next
    }
    console.log(num1+num2)
};