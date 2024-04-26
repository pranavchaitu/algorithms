/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b-a);

    let map = {}
    for(var i of nums){
        map[i] = 1;
    }
    const arr = Object.keys(map)
    if(arr.length < 3){
        return arr[arr.length-1]
    }
    return arr[arr.length-3]
};

const ans = thirdMax([2,1])
console.log(ans);