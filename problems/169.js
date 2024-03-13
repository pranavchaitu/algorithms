/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
	let res = 0;
	for(let i of nums){
		if(count == 0){
			res = i;
		}
		count += res == i ? 1 : -1;
	}
	return res;
};

console.log(majorityElement([2, 1, 1, 1, 1, 2, 2]));
