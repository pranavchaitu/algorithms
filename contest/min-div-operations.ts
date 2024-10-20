//brute-force
function minOperations(nums: number[]): number {
    let i = nums.length - 1;
    let j = i - 1;
    let count = 0
    while(j >= 0) {
        while(nums[j] > nums[i]) {
            let foundD = false
            for(var k=nums[i]-1;k>1;k--) {
                if(nums[j] % k === 0) {
                    nums[j] = k
                    foundD = true
                }
            }
            if(!foundD) {
                return -1
            } else {
                count += 1
            }
        }
        j--;
        i--;
    }
    return count
};

console.log(minOperations([1,1,1,1,1]));
console.log(minOperations([7,7,6]));
console.log(minOperations([25,7]));
