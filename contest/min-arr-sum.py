def minArraySum(nums: list[int], k: int, op1: int, op2: int) -> int:
    nums.sort(reverse=True)
    for i in range(len(nums)):
        if not (op1 or op2):
            break
        print(nums)
        if op1 and nums[i] > k:
            nums[i] = round(nums[i]/2)
            op1 -= 1
        if op2 and nums[i] > k and nums[i] < 2*k:
            nums[i] -= k
            op2 -= 1
    return sum(nums)

# ans = minArraySum([2,8,3,19,3], 3,1,1)
# print(ans)
ans = minArraySum([2,4,3], 3,2,1) #to be 3
print(ans)
