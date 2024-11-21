# OPTIMAL
def subarraySum(nums: list[int], k: int) -> int:
    res = 0
    # current count of the subarr actually
    prefixSum = 0
    # counts that occurances
    prefixSumMap = { 0 : 1 }
    for i in nums:
        prefixSum += i
        diff = prefixSum - k
        res += prefixSumMap.get(diff,0)
        prefixSumMap[prefixSum] = prefixSumMap.get(prefixSum,0) + 1
    return res 

print(subarraySum([1,-1,1,1,1],3)) 

# BRUTE-FORCE
# class Solution:
#     def subarraySum(self, nums: List[int], k: int) -> int:
#         count = 0
#         for i in range(0,len(nums)):
#             for j in range(i,len(nums)):
#                 if k == sum(nums[i:j+1]):
#                     count += 1
#         return count