export class Node<A> {
    val : A;
    priority : number;
    constructor(val : A, priority : number) {
        this.val = val
        this.priority = priority
    }
}

// a min heap for priority
class PriorityQueue<A> {
    values : Node<A>[]
    constructor() {
        this.values = []
    }

    enqueue(val : A, priority : number) {
        const newNode = new Node(val,priority)
        this.values.push(newNode)
        this.bubbleUp()
        return this.values
    }

    bubbleUp() {
        const length = this.values.length
        var cur = length - 1
        var element = this.values[cur]
        while(true) {
            const parentIdx = Math.floor((cur-1)/2)
            const parent = this.values[parentIdx]
            if(!parent || parent.priority <= element.priority) break;
            this.values[parentIdx] = element
            this.values[cur] = parent
            cur = parentIdx
        } 
    }

    dequeue() {
        const highestPriority = this.values[0]
        const popped = this.values.pop()
        if(this.values.length) {
            this.values[0] = popped!
            this.bubbleDown()
        }
        return highestPriority
    }

    bubbleDown() {
        const length = this.values.length
        var cur = 0
        var element = this.values[0]
        while(true) {
            var leftIdx = 2*cur + 1
            var rightIdx = 2*cur + 2
            var swap : number | null = null
            var left : Node<A>,right : Node<A>
            if(leftIdx < length) {
                left = this.values[leftIdx]
                if(left && left.priority < element.priority) {
                    swap = leftIdx
                }
            }
            if(rightIdx < length) {
                right = this.values[rightIdx]
                if(
                    (!swap && right.priority < element.priority) ||
                    (swap && right.priority < left!.priority)
                ) {
                    swap = rightIdx
                }
            }
            if(!swap) break
            this.values[cur] = this.values[swap]
            this.values[swap] = element
            cur = swap
        }
    }

    print() {
        console.log(this.values);
    }
}

const pq = new PriorityQueue();
pq.enqueue("a",2)
pq.enqueue("b",1)
pq.enqueue("c",3)
pq.print()
pq.enqueue("d",0)
pq.print()

pq.dequeue()
pq.print()
pq.dequeue()
pq.print()
pq.dequeue()
pq.print()
pq.dequeue()
pq.print()
pq.dequeue()
pq.print()
pq.dequeue()
pq.print()