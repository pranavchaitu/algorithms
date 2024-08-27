class MedianFinder {
    nums : number[]
    length : number
    constructor() {
        this.nums = []
        this.length = 0
    }

    addNum(num: number): void {
        this.nums.push(num)
        this.length += 1
    }

    findMedian(): number {
        // if odd [1,2,3]
        if(this.length % 2) {
            const idx = Math.floor(this.length/2)
            return this.nums[idx]
        } else {
            const [idx1,idx2] = [this.length/2,this.length/2-1]
            return (this.nums[idx1] + this.nums[idx2]) / 2
        }
    }
}

const a = new MedianFinder()
const ans1 = a.addNum(1)
const ans2 = a.addNum(2)
const ans3 = a.findMedian()

console.log(ans1,ans2,ans3);
