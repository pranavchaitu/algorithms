def findPeakElement(nums: list[int]) -> int:
    n = len(nums)
    left,right = 0,n-1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid-1] and nums[mid] > nums[mid+1]:
            return mid
        if nums[mid+1] > nums[mid]:
            left = mid + 1
        else:
            right = mid - 1
    return left

ans = findPeakElement([1,2,1,3,4,5,6])
print(ans)