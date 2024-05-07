/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a);
    if(nums.length < 3){
        return nums[nums.length-1]
    }
    const uniqueElements = new Set(nums)
    const pr = Array.from(uniqueElements)
    return pr[2]
};

const ans = thirdMax([1,2])
console.log(ans);