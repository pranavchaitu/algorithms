def maxSubArray(nums: list[int]) -> int:
    maxVal = nums[0]
    curSum = 0
    for n in nums:
        if curSum < 0:
            curSum = 0
        curSum += n
        maxVal = max(curSum,maxVal)
    return maxVal

# res = maxSubArray([5,4,-1,7,8])
res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
print(res) #to be 6