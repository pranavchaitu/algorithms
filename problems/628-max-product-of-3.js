/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b)
    let product1 = 1;
    let product2 = 1;
    let len = nums.length
    product1 = nums[len - 1] * nums[len - 2] * nums[len - 3]
    product2 = nums[0] * nums[1] * nums[len - 1]
    return Math.max(product1,product2)
};

const ans = maximumProduct([-100,-2,-3,1])  
console.log(ans);