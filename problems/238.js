/**
 * @param {number[]} nums
 * @return {number[]}
 */
//O(N) way
var productExceptSelf = function (nums) {
  let res = []
  let prefix = 1
  for(let i=0;i<nums.length;i++){
    res[i] = prefix
    prefix *= nums[i]
  }
  let postfix = 1
  for(let i=nums.length-1;i>=0;i--){
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
};

// var productExceptSelf = function (nums) {
//   let arr = [];
//   for (let i in nums) {
//     let product = 1;
//     for (let j in nums) {
//       if (i !== j) {
//         product = product * nums[j];
//       }
//     }
//     arr.push(product);
//   }
//   return arr;
// };

console.log(productExceptSelf([1, 2, 3, 4]));
