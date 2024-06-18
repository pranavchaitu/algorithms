export class Node {
    val : number
    next : Node | null
    constructor(val : number) {
        this.val = val
        this.next = null
    }
}

class MyLinkedList {
    head : Node | null
    tail : Node | null
    length : number
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    get(index: number): number {
        if(index >= this.length || index < 0) return -1
        var current = this.head 
        for(var i=0;i<index;i++) {
            current = current!.next
        }
        return current!.val
    }
    // unshift
    addAtHead(val: number): void {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    addAtTail(val: number): void {
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    addAtIndex(index: number, val: number): void {
        if(index > this.length || index < 0) return
        if(index === 0) return this.addAtHead(val)
        if(index === this.length) return this.addAtTail(val)
        const newNode = new Node(val)
        //this is like doing this.get(index-1) 
        var prev = this.head
        for(var i=0;i<index-1;i++) {
            prev = prev!.next
        }
        newNode.next = prev!.next
        prev!.next = newNode
        this.length++
    }

    deleteAtIndex(index: number): void {
        if(index >= this.length || index < 0) return
        if(index === 0) {
            if(!this.head) return
            this.head = this.head.next
            this.length--
            if(!this.length) {
                this.tail = null
            }
            return
        } else if(index == this.length - 1) {
            if(!this.tail) return
            var newTail = this.head
            while(newTail?.next?.next){
                newTail = newTail!.next
            } 
            newTail!.next = null
            this.tail = newTail
            this.length--
            if(!this.length) {
                this.tail = null
                this.head = null
            }
            return
        }
        var prev = this.head
        for(var i=0;i<index-1;i++){
            prev = prev!.next
        }
        var toRemove = prev?.next
        prev!.next = toRemove!.next
        this.length--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */