/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let cache = {}
    for(let i=0;i<nums.length;i++){
        const width = i - cache[nums[i]]
        if(width <= k) {
            return true;
        }
        cache[nums[i]] = i
    }
    return false;
};


console.log(containsNearbyDuplicate([1,0,1,1],1));