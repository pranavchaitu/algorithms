export class Node<A> {
    val : A
    next : Node<A> | null
    constructor(val : A) {
        this.val = val
        this.next = null
    }
}

class Queue<A> {
    first : Node<A> | null
    last : Node<A> | null
    size : number
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    //push in linkedlist
    enqueue(val : A) : number {
        const current = new Node(val)
        if(!this.first)  {
            this.first = current
            this.last = current
        } else {
            this.last!.next = current
            this.last = current
        }
        return ++this.size 
    }
    //shift in linkedlist
    dequeue() : A | null {
        if(!this.first) {
            return null
        }
        var oldFirst = this.first
        this.first = oldFirst.next
        oldFirst.next = null
        this.size -= 1
        if(!this.size) {
            this.last = null
        }
        return oldFirst.val
    }
    print() : void {
        var current = this.first
        const res = new Array()
        while(current) {
            res.push(current.val)
            current = current.next
        }
        return console.log(res);
    }
}
// --------------    USING OUR-OWN    --------------
const queue = new Queue() 
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
queue.print()
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print()
console.log(queue.dequeue());
queue.print()
console.log(queue.dequeue());

// --------------    USING ARRAY    --------------
// var q = new Array()
// console.log(q.unshift(3))
// console.log(q.unshift(4))
// console.log(q.unshift(5))
// console.log(q);
// console.log(q.pop())
// console.log(q.pop())
// console.log(q);
// console.log(q.pop())
// console.log(q);
// console.log(q.pop());




