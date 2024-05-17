/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//optimal
var getIntersectionNode = function(headA, headB) {
    var temp1 = headA
    var temp2 = headB
    while(headA !== headB){
        headA = headA == null ? temp2 : headA.next
        headB = headB == null ? temp1 : headB.next
    }
    return headA
}

//bruteforce2
// var getIntersectionNode = function(headA, headB) {
//     var diff = findDif(headA,headB)
//     if(diff < 0){
//         while(diff++ !== 0) headB = headB.next
//     } else {
//         while(diff-- !== 0) headA = headA.next
//     }
//     while(headA){
//         if(headA === headB) return headA
//         headA = headA.next
//         headB = headB.next
//     }
//     return null
// }

// function findDif(headA,headB) {
//     var len1 = 0
//     var len2 = 0
//     while(headA) {
//         headA = headA.next
//         len1++
//     }
//     while(headB) {
//         headB = headB.next
//         len2++
//     }
//     return len1 - len2
// }

//bruteforce1
// var getIntersectionNode = function(headA, headB) {
//     var map = new Map()
//     while(headA) {
//         map.set(headA)
//         headA = headA.next
//     }
//     while(headB){
//         if(map.has(headB)) return headB
//         headB = headB.next
//     }
//     return null
// };