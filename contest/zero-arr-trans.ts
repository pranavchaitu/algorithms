//BETTER
function isZeroArray(nums: number[], queries: number[][]): boolean {
    let track : Record<string,number> = {}
    for(var [left,right] of queries) {
        for(let i=left;i<=right;i++) {
            if(!track[i]) track[i] = 0
            track[i] += 1
        } 
    }
    for(var i in nums) {
        if((!track[i] && nums[i] > 0) || 
            (nums[i] > track[i])) {
            return false
        }
    }
    return true
};

//BRUTE-FORCE
// function isZeroArray(nums: number[], queries: number[][]): boolean {
//     for(var [left,right] of queries) {
//         for(var i=left;i<=right && i<=nums.length;i++) {
//             if(nums[i] > 0) {
//                 nums[i] -= 1
//             }
//         }
//     }
//     const set = new Set(nums)
//     return set.size == 1 && set.has(0)
// };

console.log(isZeroArray([1,0,1],[[0,2]]));
console.log(isZeroArray([4,3,2,1],[[1,3],[0,2]]));
console.log(isZeroArray([4,6],[[0,0],[0,1],[1,1],[0,0],[1,1],[1,1],[0,0],[1,1],[1,1],[1,1],[0,0],[1,1],[0,1],[0,0],[1,1]]));
console.log(isZeroArray([6,0,1],[[2,2]]));
