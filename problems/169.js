/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count;
    let n = nums.length;
    for(let i=0;i<n;i++){
        count = 1;
        for(let j=i+1;j<n;j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }
				console.log(count);
        if(count > (n / 2)){
            return nums[i];
        }
    }
    return -1;
};

console.log(majorityElement([2,2,1,1,1,2,2]));