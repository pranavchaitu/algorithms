export interface Vertex<A> {
    val : A;
    priority : number
}

export class PriorityQueue<A> {
    values : Vertex<A>[]
    constructor() {
        this.values = []
    }

    enqueue(val : A, priority : number) {
        this.values.push({ val,priority })
        this.sort()
    }
    dequeue() {
        return this.values.shift()
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority)
    }
}