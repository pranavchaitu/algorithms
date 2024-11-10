function maxIncreasingSubarrays(nums: number[]): number {
    for(let i=Math.floor(nums.length/2);i>0;i--) {
        if(hasIncreasingSubarrays(nums,i))
            return i
    }
    return 0
};

function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    if(nums.length == 2) return true
    let left = 0;
    let right = 2*k - 1;
    while(right < nums.length) {
        if(isStrict(nums.slice(left,right+1))) {
            return true
        }
        left += 1
        right += 1
    }
    return false
};

function isStrict(nums : number[]) {
    let i = 0;
    let j = nums.length / 2;
    while(j < nums.length && nums[i] < nums[i+1] && nums[j] < nums[j+1]) {
        i += 1
        j += 1
    }
    return j == nums.length-1 ? true : false
}

// const ans = maxIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1])
const ans = maxIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7])
console.log(ans);
