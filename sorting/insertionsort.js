function insertionSort(nums) {
	for(let i = 1;i<nums.length;i++){
		let j = i - 1;
		while(j >= 0 && nums[j] > nums[j+1]){
			let temp = nums[j];
			nums[j] = nums[j+1];
			nums[j+1] = temp;
			j--;
		}
	}
	return nums;
}

const ans = insertionSort([1,4,2,5,8,55,33]);
console.log(ans);