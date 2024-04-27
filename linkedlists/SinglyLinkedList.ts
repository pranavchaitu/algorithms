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
}

const list = new SinglyLinkedList();

console.log(`push here------------------------------------------------------`);
list.push(true)
list.push(6)
list.push("chaitu")
list.push(7)
list.push("pranav")
console.log(`push done------------------------------------------------------`);

console.log(`pop here------------------------------------------------------`);
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
list.pop()
console.log(`pop done------------------------------------------------------`);

console.log(`------------------------------------------------------`);
console.log(list);
console.log(`------------------------------------------------------`);
