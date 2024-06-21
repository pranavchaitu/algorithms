function returnToBoundaryCount(nums: number[]): number {
    var count = 0
    var current = 0
    for(var i of nums) {
        current += i
        if(!i) count++
    }
    return count  
  };