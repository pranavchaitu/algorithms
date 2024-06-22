function triangleType(nums: number[]): string {
    if(nums[0] + nums[1] <= nums[2] || nums[1] + nums[2] <= nums[0] || nums[0] + nums[2] <= nums[1]){
        return "none"
    }
    var set = new Set(nums)
    if(set.size == 1)  {
        return "equilateral"
    } else if (set.size == 2) {
        return "isosceles"
    } else {
        return "scalene"
    }
};