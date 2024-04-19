/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let count = nums.length;
    const set = new Set(nums)
    console.log(set);
    let num = 0;
    while(num < count){
        if(set.has(num)){
            num++;
        }else {
            return num;
        }
    }
    return num;
};

console.log(missingNumber([0,1,4,2,3]));