/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let l = 0;
    let r = 0 ;
    let max = 0;
    while(r < nums.length){
        if(nums[r] == 1){
            max = Math.max(max,r-l+1)
            r++
        }else {
            while(nums[r] == 0){
                r++;
            }
            l = r;
        }
    }
    return max;
};


const ans = findMaxConsecutiveOnes([0,1,1,1,1,1,0,0,1,1,1,1])
console.log(ans);