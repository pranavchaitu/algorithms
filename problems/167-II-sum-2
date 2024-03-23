/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	// using 2 pointers
	let l = 0;
	let r = nums.length - 1;
	while(l < r){
			let sum = nums[l] + nums[r];
			if(sum > target){
				r--;
			}else if(sum < target){
				l++;
			}else {
				return [l+1,r+1];
			}
	}
	//using hashmap
	// let map = {};
	// let comp;
	// for(let i=0;i<nums.length;i++){
	//     comp = target - nums[i];
	//     if(comp in map){
	//         return [i,map[comp]];
	//     }
	//     map[nums[i]] = i;
	// }
	// return [-1,-1];
};

const ans = twoSum([2,3,5,4],6);
console.log(ans);
