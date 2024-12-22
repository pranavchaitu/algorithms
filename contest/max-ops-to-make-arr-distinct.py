def minimumOperations(nums) -> int:
    res = 0
    while len(nums):
        if len(nums) == len(set(nums)):
            break
        nums = nums[3:]
        res += 1
    return res
    
ans = minimumOperations([1,2,3,4,2,3,3,5,7])
print(ans)