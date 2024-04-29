/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    nums.sort((a,b) => b-a)
    const unique = Array.from(new Set(nums));
    if(unique.length < 3) return nums[0]
    return unique[2]
};

const ans = thirdMax([2,1])
console.log(ans);