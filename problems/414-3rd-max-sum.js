/**
 * @param {number[]} nums
 * @return {number}
 */
<<<<<<< HEAD
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a);
    if(nums.length < 3){
        return nums[nums.length-1]
    }
    const uniqueElements = new Set(nums)
    const pr = Array.from(uniqueElements)
    return pr[2]
=======
function thirdMax(nums) {
    nums.sort((a,b) => b-a)
    const unique = Array.from(new Set(nums));
    if(unique.length < 3) return nums[0]
    return unique[2]
>>>>>>> 206c5e669e6f30f2ab0f89436852c61572a4b243
};

const ans = thirdMax([1,2])
console.log(ans);