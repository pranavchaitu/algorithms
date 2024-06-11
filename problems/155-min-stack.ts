export class Node {
    val : number
    min : number 
    next : Node | null
    constructor(val : number) {
        this.val = val
        this.next = null
        this.min = val
    }
}

class MinStack {
    topper : Node | null
    constructor() {
        this.topper = null
    }

    push(val: number): void {
        var current = new Node(val)
        if(!this.topper) {
            this.topper = current
            current.min = val
        } else {
            current.min = Math.min(this.topper.min,current.min)
            current.next = this.topper
            this.topper = current
        }
    }

    pop(): void {
        if(!this.topper) return 
        this.topper = this.topper.next
    }

    top(): number {
        return this.topper!.val
    }

    getMin(): number {
        return this.topper!.min
    }
}

var stack = new MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
console.log(stack.getMin());
stack.pop()
console.log(stack.top());
console.log(stack.getMin());


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.topper()
 * var param_4 = obj.getMin()
 */