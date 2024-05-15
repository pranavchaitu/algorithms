/**
 * @param {Node} head
 * @returns {number}
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    //Function to find the length of a loop in the linked list.
    countNodesinLoop(head) {
        if(!head && !head.next) return 0
        var temp = head
        var slow = head
        var fast = head
        while(fast && fast.next){
            slow = slow.next        
            fast = fast.next.next
            if(slow === fast){
                let len = 0
                do{
                    slow = slow.next
                    len += 1
                }while(slow !== fast)
                return len
            }
        }
        return 0
    }
    
}
