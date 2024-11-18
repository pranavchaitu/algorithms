function countValidSelections(nums: number[]): number {
    function happens(curIdx  : number) : number {
        const leftSum = nums.slice(0,curIdx+1).reduce((a,b) => a+b,0)
        const rightSum = nums.slice(curIdx+1,nums.length).reduce((a,b) => a+b,0)
        return leftSum == rightSum ? 2 : Math.abs(leftSum-rightSum) == 1 ? 1 : 0
    }
    let res : number = 0;
    for(var i in nums) {
        if(nums[i] == 0) {
            res += happens(Number(i))
        }
    }    
    return res;
};

// console.log(countValidSelections([1,0,2,0,3]));
// console.log(countValidSelections([2,3,4,0,4,1,0]));
console.log(countValidSelections([16,13,10,0,0,0,10,6,7,8,7]));
