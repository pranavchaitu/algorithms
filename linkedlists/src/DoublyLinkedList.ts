export class Node<A> {
    val : A
    next : Node<A> | null
    prev : Node<A> | null
    constructor(val : A) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList<A> {
    head : Node<A> | null    
    tail : Node<A> | null    
    length : number 
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val : A) {
        const current = new Node(val)
        if(!this.head) {
            this.head = current
            this.tail = current
        } else {
            this.tail!.next = current
            current.prev = this.tail
            this.tail = current
        }
        this.length ++
        return this
    }
    pop() {
        if(!this.head) return undefined
        const currentTail = this.tail
        if(this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail!.prev
            this.tail!.next = null
            currentTail!.prev = null
        }
        this.length--
        return currentTail
    }   
    shift() {
        if(!this.head) return undefined
        const oldHead = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head!.prev = null 
            oldHead.next = null
        } 
        this.length--
        // alternative edge case check below
        // if(this.length === 0) this.tail = null        
        return oldHead
    }
    unshift(val : A) {
        const current = new Node(val)
        if(!this.head) {
            this.head = current
            this.tail = this.head
        } else {
            current.next = this.head
            this.head.prev = current
            this.head = current
        }
        this.length++
        return this
    }
}

const list = new DoublyLinkedList()
list.push(1)
list.push(12)
list.push(13)
console.log(list);
list.shift()
console.log(`-----------------------------------`);
console.log(list);
