/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
    let l = 0;
    let r = l + 1;
    while(l < r && nums[l] == nums[r]){
        l = l+2;
        r = r+2;
    }
    return nums[l];
};

console.log(singleNumber([1,4,2,1,4]));