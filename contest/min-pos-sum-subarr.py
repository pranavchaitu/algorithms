def generateSubarr(arr, inc):
    res = []
    for i in range(0,len(arr)):
        if i + inc < len(arr) + 1:
            res.append(arr[i:i+inc])
    return res

def minimumSumSubarray(nums: list[int], l: int, r: int) -> int:
    minSum = 1
    first = True
    for i in range(l, r+1):
        arr = generateSubarr(nums, i)
        for j in arr:
            curSum = sum(j)
            if curSum > 0 and first:
                minSum = curSum
                first = False
            elif curSum > 0 and curSum < minSum:
                minSum = curSum
    return minSum if not first else -1


res = minimumSumSubarray([1,2,3,4], 2, 4)
print(res)

