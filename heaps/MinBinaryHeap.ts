export class MinBinaryHeap {
    values : number[]
    constructor() {
        this.values = []
    }

    insert(val : number) {
        this.values.push(val)
        this.bubbleUp()
        return this.values
    }

    bubbleUp() {
        var cur = this.values.length - 1
        var element = this.values[cur]
        while(cur) {
            const parentIndex = Math.floor((cur - 1) / 2)
            const parent = this.values[parentIndex]
            if(parent <= element) {
                break;
            }
            this.values[parentIndex] = element
            this.values[cur] = parent
            cur = parentIndex
        }
    }

    extractMin() {
        const min = this.values[0]
        const last = this.values.pop()
        if(this.values.length > 0) {
            this.values[0] = last!
            this.bubbleDown()
        } 
        return min
    }

    bubbleDown() {
        var cur = 0
        var element = this.values[cur]
        const length = this.values.length
        while(1) {
            var left : number,right : number;
            var swap : number | null = null;
            const leftIndex = cur * 2 + 1
            const rightIndex = cur * 2 + 2
            if(leftIndex < length) {
                left = this.values[leftIndex]
                if(left < element) {
                    swap = leftIndex
                }
            } 
            if(rightIndex < length) {
                right = this.values[rightIndex]
                if(
                    (!swap && right < element) || 
                    (swap && right < left!)
                ) {
                    swap = rightIndex
                }   
            }
            if(!swap) {
                break
            }
            this.values[cur] = this.values[swap]
            this.values[swap] = element
            cur = swap
        }
    }
}

// const min = new MinBinaryHeap()

// min.insert(5)
// min.insert(2)
// min.insert(3)
// min.insert(1)
// min.insert(6)

// console.log(`---------------------`);

// min.extractMin()
// min.extractMin()
// min.extractMin()
// min.print()
// min.insert(1)
// console.log(`final : ` + min.values[0]);


