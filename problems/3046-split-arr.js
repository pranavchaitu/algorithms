/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let fc = {}
    for(let i of nums){
        fc[i] = ++fc[i] || 1;
    }   
    for(let i in fc){
        if(fc[i] > 2){
            return false
        }
    }
    return true;
};

console.log(isPossibleToSplit([1,1,1,1]));