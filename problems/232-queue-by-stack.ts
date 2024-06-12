export class Node {
    val : number
    next : Node | null
    constructor(val : number) {
        this.val = val
        this.next = null
    }
}

class MyQueue {
    first : Node| null
    last : Node | null
    size : number
    
    constructor() {
        this.first = this.last = null
        this.size = 0    
    }

    push(x: number): void {
        const newNode = new Node(x)
        if(!this.first) {
            this.first = this.last = newNode 
        } else {
            this.last!.next = newNode
            this.last = newNode
        }
        this.size += 1
    }

    pop(): number | undefined {
        if(!this.first) return undefined
        const toRemove = this.first
        this.first = this.first.next
        this.size -= 1
        if(!this.size) this.last = null
        return toRemove.val
    }

    peek(): number {
        return this.first!.val
    }

    empty(): boolean {
        return this.size === 0
    }
}


var queue = new MyQueue()
console.log(queue.push(1))
console.log(queue.push(2))  
console.log(queue.peek())  
console.log(queue.pop())  
console.log(queue.empty())  
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */