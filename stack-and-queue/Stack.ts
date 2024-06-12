export class Node<A> {
    val : A
    next : Node<A> | null
    constructor(val : A) {
        this.val = val
        this.next = null
    }
}

class Stack<A> {
    top : Node<A> | null
    size : number
    constructor() {
        this.top = null
        this.size = 0
    }
    push(val : A) : number {
        const current = new Node(val)
        if(!this.top) {
            this.top = current
        } else {
            current.next = this.top 
            this.top = current
        } 
        return ++this.size 
    }
    pop() : A | null {
        if(!this.top) return null
        const removed = this.top
        this.top = removed!.next
        removed.next = null //optional
        this.size--
        return removed.val
    }
    print() : void {
        var current = this.top
        const res = new Array()
        while(current) {
            res.push(current.val)
            current = current.next
        }
        return console.log(res);
    }
}

const stack = new Stack()
console.log('-------------------- pushing --------------------');
console.log(stack.push(12))
console.log(stack.push(13))
console.log(stack.push(14))
console.log(stack.push(15))
console.log(stack.push(16))
stack.print()
console.log('-------------------- popping --------------------');
console.log(stack.pop())
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack.print()
console.log(stack.pop())
console.log(stack);

