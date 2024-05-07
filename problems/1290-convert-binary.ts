//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)      
    }
}

function getDecimalValue(head: ListNode | null): number {
    if(!head){
        return 0;
    }
    let val = "";
    while(head) {
        val += head.val;
        head = head.next;
    }
    return findDecimal(val);
};

function findDecimal(binary : string) : number {
    let decimal = 0;
    let power = binary.length-1;
    for(var i=0;i<binary.length;i++){
        let digit = parseInt(binary[i])
        decimal += digit * Math.pow(2,power)
        power--
    }
    return decimal;
}
