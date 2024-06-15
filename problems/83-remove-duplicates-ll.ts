/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    var temp = head
    var next : ListNode | null
    while(head!.next) {
        next = head!.next
        while(head!.val == next!.val) {
            next = next!.next
        }
        head!.next = next
        head = head!.next
    }
    return temp
};