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

// console.log(isStrict([5,6,7,2,3,4])); //to return true

// const ans = hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3)

const ans = hasIncreasingSubarrays([5,8,-2,-1], 2)
console.log(ans);


