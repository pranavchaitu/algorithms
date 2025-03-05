def rotate(nums,k):
    def reverse(start,end):
        while start < end:
            nums[start],nums[end] = nums[end],nums[start]
            start += 1
            end -= 1
    n = len(nums)
    reverse(0,n-k-1)
    reverse(n-k,n-1)
    reverse(0,n-1)

    # n = len(nums)
    # k = k % n
    # res = nums[-k:]+nums[:-k]
    # for i in range(n):
    #     nums[i] = res[i]

res = rotate([1,3,4,5],2)
print(res)