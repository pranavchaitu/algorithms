function lastStoneWeight(stones: number[]): number {
    const heap = new MaxBinaryHeap()
    for(var i of stones) {
        heap.insert(i)
    }
    while(heap.values.length > 1) {
        const a = heap.extractMax()
        const b = heap.extractMax()
        if(a != b) {
            heap.insert(a-b)
        }
    }
    return heap.extractMax() || 0
};

class MaxBinaryHeap{
    values :  number[]
    constructor(values? : number[]) {
        this.values = values || []
    }
    insert(val : number) {
        this.values.push(val)
        this.bubbleUp()
        return this.values
    }
    bubbleUp() {
        var cur = this.values.length - 1;
        var element = this.values[cur]
        while(cur > 0) {
            const parentIndex = Math.floor((cur - 1) / 2)
            const parent = this.values[parentIndex]
            if(parent >= element) {
                break;
            } 
            this.values[parentIndex] = element
            this.values[cur] = parent
            cur = parentIndex
        }
    }

    extractMax() {
        const max = this.values[0]
        const popped = this.values.pop()
        if(this.values.length > 0) {
            this.values[0] = popped!
            this.bubbleDown()
        }
        return max
    }

    bubbleDown() {
        var cur = 0;
        var element = this.values[cur]
        const length = this.values.length
        while(true) {
            var swap : number | null = null
            const leftIndex = cur * 2 + 1
            const rightIndex = cur * 2 + 2
            var left : number
            var right : number
            if(leftIndex < length) {
                left = this.values[leftIndex]
                if(left > element) {
                    swap = leftIndex
                }
            }
            if(rightIndex < length) {
                right = this.values[rightIndex]
                if(
                    (swap == null && right > element) ||
                    (swap != null && right > left!)
                ) {
                    swap = rightIndex
                }
            }
            if(!swap) break
            this.values[cur] = this.values[swap]
            this.values[swap] = element
            cur = swap
        }
    }
}
