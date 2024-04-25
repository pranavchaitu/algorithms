/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a);
    // if(nums.length < 3){
    //     return nums[nums.length-1]
    // }
    // console.log(nums);
    let max = 3;
    for(let i=nums.length;i>=0;i--){
        if(max == 0 && nums[i-1] != nums[i]){
            return nums[i]
        }
        while(nums[i] == nums[i-1]){
            i--;
        }
        max--;  
    }
};

const ans = thirdMax([2,1,5,5,11])
console.log(ans);