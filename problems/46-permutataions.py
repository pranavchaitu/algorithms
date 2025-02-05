def permute(self, nums: list[int]) -> list[list[int]]:
    if len(nums) == 1:
        return [nums]
    res = self.permute(nums[1:])
    ans = []
    for i in range(len(nums)):
        for j in res:
            t = j[:]
            t.insert(i,nums[0])
            ans.append(t)
    return ans

# def permute(self, nums: list[int]) -> list[list[int]]:
#     res = []
#     freq = [0]*len(nums)
#     n = len(nums)
#     def helper(arr):
#         if len(arr) == n:
#             res.append(arr)
#             return
#         for i in range(n):
#             if not freq[i]:
#                 freq[i] = 1
#                 helper(arr+[nums[i]]) 
#                 freq[i] = 0
#     helper([])
#     return res

# def permute(self, nums: list[int]) -> list[list[int]]:
#     res = []
#     n = len(nums)
#     def helper(idx,arr):
#         if idx == n:
#             res.append(arr[:])
#             return
#         for i in range(idx,n):
#             arr[i],arr[idx] = arr[idx],arr[i]
#             helper(idx+1,arr)
#             arr[i],arr[idx] = arr[idx],arr[i]
#     helper(0,nums)
#     return res