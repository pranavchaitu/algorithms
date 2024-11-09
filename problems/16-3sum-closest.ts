function threeSumClosest(nums: number[], target: number): number {
    let set = new Set(nums);
    for(var i of nums) {
        if(set.has(target - i)) {
            return [i,target-i]
        }
    }
    return [-1,-1]
};

const ans = threeSumClosest([1,4,2,3],6)
console.log();
