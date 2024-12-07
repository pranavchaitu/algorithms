# class Solution:
#     def minOperations(self, nums: list[int], k: int) -> int:
#         for i in nums:
#             if i < k:
#                 return -1
#         s = sorted(list(set(nums)))
#         print(s)
#         return 1  
    

class Solution:
    def findMinimumTime(self, strength: list[int], K: int) -> int:
        res = 0
        x = 1
        while max(strength) > K:
            m = min(strength)
            res += m
            strength.remove(m)
            x += m
        return res
    print(findMinimumTime())