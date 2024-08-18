class KthLargest {
    k: number;
    heap: MinHeap;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new MinHeap();
        nums.forEach((i) => this.add(i));
    }

    add(val: number): number {
        this.heap.insert(val);
        if (this.heap.size() > this.k) {
            this.heap.pop();
        }
        return this.heap.peek();  // Corrected 'peak' to 'peek'
    }
}

class MinHeap {
    values: number[];

    constructor() {
        this.values = [];
    }

    insert(val: number) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let cur = this.values.length - 1;
        const element = this.values[cur];
        while (cur > 0) {  // Loop should run as long as cur > 0
            let parentIdx = Math.floor((cur - 1) / 2);  // Corrected index calculation
            let parent = this.values[parentIdx];
            if (element >= parent) break;  // Correct comparison logic
            this.values[parentIdx] = element;
            this.values[cur] = parent;
            cur = parentIdx;
        }
    }

    size() {
        return this.values.length;
    }

    pop() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0 && end !== undefined) {  // Handle the case when end might be undefined
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let cur = 0;
        const length = this.values.length;
        const element = this.values[cur];

        while (true) {
            let swap: number | null = null;
            let leftIndex = 2 * cur + 1;
            let rightIndex = 2 * cur + 2;

            if (leftIndex < length) {
                let left = this.values[leftIndex];
                if (left < element) {  // Corrected comparison logic
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                let right = this.values[rightIndex];
                if (
                    (swap === null && right < element) ||
                    (swap !== null && right < this.values[swap])
                ) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[cur] = this.values[swap];
            this.values[swap] = element;
            cur = swap;
        }
    }

    peek() {
        return this.values[0];  // Corrected 'peak' to 'peek'
    }
}
