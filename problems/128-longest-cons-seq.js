/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
	let longest = 0;
	for(let num of nums){
		let prev = num - 1;
		if(numSet.has(prev)){
			continue;
		}
		let [currentNum, score] = [num, 1]
		// const isStreak = () => numSet.has(currentNum + 1);
		while(numSet.has(currentNum + 1)){
			currentNum++;
			score++;
		}
		longest = Math.max(longest, score);
	}
	return longest;
};

console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));
