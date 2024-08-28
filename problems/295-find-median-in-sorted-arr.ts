import { MinBinaryHeap} from "../heaps/MinBinaryHeap"
import { MaxBinaryHeap} from "../heaps/MaxBinaryHeap"

// optimal
class MedianFinder {
    small : MaxBinaryHeap
    large : MinBinaryHeap
    constructor() {
        this.small = new MaxBinaryHeap()
        this.large = new MinBinaryHeap()
    }

    addNum(num: number): void {
        this.small.insert(num)
        if(this.small && this.large &&
            (this.small.values[0] > this.large.values[0])
        ) {
            const val = this.small.extractMax()
            this.large.insert(val)
        }        

        // uneven size case
        if(this.small.values.length > this.large.values.length + 1) {
            const val = this.small.extractMax()
            this.large.insert(val)
        }
        if(this.large.values.length > this.small.values.length + 1) {
            const val = this.large.extractMin()
            this.small.insert(val)
        }
    }

    findMedian(): number {
        if(this.small.values.length > this.large.values.length) {
            return this.small.values[0]
        } else if (this.large.values.length > this.small.values.length) {
            return this.large.values[0]
        } else {
            return (this.small.values[0] + this.large.values[0]) / 2
        }
    }
}

const a = new MedianFinder()
const ans1 = a.addNum(3)
const ans2 = a.addNum(2)
const ans3 = a.addNum(1)
const ans4 = a.findMedian()

console.log(ans1,ans2,ans3,ans4);

// brute force
// class MedianFinder {
//     nums : number[]
//     length : number
//     constructor() {
//         this.nums = []
//         this.length = 0
//     }

//     addNum(num: number): void {
//         this.nums.push(num)
//         this.length += 1
//     }

//     findMedian(): number {
//         // if odd [1,2,3]
//         if(this.length % 2) {
//             const idx = Math.floor(this.length/2)
//             return this.nums[idx]
//         } else {
//             const [idx1,idx2] = [this.length/2,this.length/2-1]
//             return (this.nums[idx1] + this.nums[idx2]) / 2
//         }
//     }
// }
