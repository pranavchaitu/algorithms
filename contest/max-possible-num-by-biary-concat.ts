function maxGoodNumber(nums: number[]): number {
    // nums[0] nums[1] nums[2]
    // nums[0] nums[2] nums[1]
    // nums[1] nums[0] nums[2]
    // nums[1] nums[2] nums[0]
    // nums[2] nums[1] nums[0]
    // nums[2] nums[0] nums[1]
    let max = -Infinity
    let num1 = nums[0].toString(2)
    let num2 = nums[1].toString(2) 
    let num3 = nums[2].toString(2)
    max = Math.max(max,parseInt(num3+num1+num2,2));
    max = Math.max(max,parseInt(num3+num2+num1,2));
    max = Math.max(max,parseInt(num2+num1+num3,2));
    max = Math.max(max,parseInt(num2+num3+num1,2));
    max = Math.max(max,parseInt(num1+num2+num3,2));
    max = Math.max(max,parseInt(num1+num3+num2,2));
    return max
};

// function maxGoodNumber(nums: number[]): number {
//     // nums[0] nums[1] nums[2]
//     // nums[0] nums[2] nums[1]
//     // nums[1] nums[0] nums[2]
//     // nums[1] nums[2] nums[0]
//     // nums[2] nums[1] nums[0]
//     // nums[2] nums[0] nums[1]
//     nums.forEach(a => console.log(ratioOf1(a.toString(2))))
//     nums.sort((a,b) => ratioOf1(b.toString(2)) - ratioOf1(a.toString(2)))
//     console.log(nums)
//     return 1
// };

// function ratioOf1(str : string) : number {
//     let count = 0
//     for(var i of str) {
//         if(i) count+=1
//     }
//     return count / str.length
// }

const res = maxGoodNumber([2,8,16])
console.log(res);
