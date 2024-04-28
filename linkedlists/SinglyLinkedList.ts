export class Node<A> {
    val : A
    next : Node<A> | null
    constructor(val : A) {
        this.val = val;
        this.next = null
    }
}   

class SinglyLinkedList<A>{
    head : Node<A> | null
    tail : Node<A> | null
    length : number
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val : A) {
        const current = new Node(val);
        if(!this.head){
            this.head = current
            this.tail = this.head
        } else {
            this.tail!.next = current
            this.tail = current
        }
        this.length++
        return console.log(this) 
    }
    pop() {
        if(!this.head){
            return console.log(undefined);
        }
        var current = this.head
        var newTail = this.head
        while(current?.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null 
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return console.log(current);
    }
    shift() {
        if(!this.head) {
            return console.log(undefined);
        }
        var current = this.head
        this.head = current.next
        this.length --
        return console.log(current);
    }
    unshift(val : A) {
        var current = new Node(val)
        if(!this.head) {
            this.head = current
            this.tail = current
        } else {
            current.next = this.head
            this.head = current
        }
        this.length ++
        return console.log(list);
    }
    get(index : number){
        if(index < 0 || index > this.length) return console.log(null);
        var current = this.head
        var i = 0;
        while(i !== index) {
            current = current!.next
            i++
        }
        return console.log(current);
    }
}

const list = new SinglyLinkedList();
list.push(1)
list.push(4)
list.push(8)
list.get(0)
list.get(1)
list.get(2)