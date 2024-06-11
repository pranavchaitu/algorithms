export class Node {
    val : number
    next : Node | null
    constructor(val : number) {
        this.val = val
        this.next = null
    }
}

class MyStack {
    topper : Node | null
    size : number

    constructor() {
        this.topper = null
        this.size = 0
    }

    push(x: number): void {
        const current = new Node(x)
        if(!this.topper) {
            this.topper = current
        } else {
            current.next = this.topper
            this.topper = current
        }
        this.size += 1
    }

    pop(): number {
        if(!this.top) return 0
        const remove = this.topper
        this.topper = this.topper!.next
        this.size -= 1
        return remove!.val
    }

    top(): number {
        return this.topper!.val
    }

    empty(): boolean {
        return this.size === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.topper()
 * var param_4 = obj.empty()
 */
