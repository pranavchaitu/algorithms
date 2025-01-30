# powerset algo
    # - OTHER WAY(TODO)
# or by using backtracking

# 1 - GENERATE ALL SUBSEQUENCES
def subsequences(str):
    res = []
    n = len(str)
    def helper(s,i):
        if i >= n:
            if s:
                res.append(s)
            return
        helper(s+str[i],i+1)
        helper(s,i+1)
    helper("",0)
    return res

# res = subsequences('abc')
# print(res)

# NOOB-WAY

# def perfectSum(arr, target):
#     res = []
#     n = len(arr)
#     def helper(i, a):
#         if sum(a) == target:
#             res.append(a)
#         if i >= n:
#             return
#         helper(i+1,a+[arr[i]])
#         helper(i+1,a)
#     helper(0, [])
#     return len(set([tuple(i) for i in res]))
    
# res = perfectSum([5,2,3,10,6,8],10)
# print(res)

# better way
# 2 - GENERATE ALL SUBSEQUENCES WHICH SUM EQUALS K
def sumEqualsK(arr, K):
    res = []
    n = len(arr)
    def helper(s, i, a):
        if i >= n:
            if s == K:
                res.append(a)
            return
        helper(s, i+1, a)
        helper(s + arr[i], i+1, a + [arr[i]])
    helper(0, 0, [])
    return res

# res = sumEqualsK([1,2,1],2)
# print(res)

# 3 - GENERATE ALL SUBSEQUENCES WHICH SUM EQUALS K
# BUT JUST THE FIRST ONE
def sumEqualsKFirstOne(arr, K):
    res = []
    n = len(arr)
    def helper(s, i, a):
        if i >= n:
            if s == K:
                res.append(a)
                return True
            return False
        if helper(s, i+1, a):
            return True
        if helper(s + arr[i], i+1, a + [arr[i]]):
            return True
        return False
    helper(0, 0, [])
    return res

# res = sumEqualsKFirstOne([1,2,1],2)
# print(res)

# 4 - GENERATE ALL SUBSEQUENCES WHICH SUM EQUALS K
# BUT JUST THE COUNT
from functools import cache
def sumEqualsKCount(arr, target):
    n = len(arr)
    @cache
    def helper(i, s):
        if s > target:
            return 0
        if i == n:
            if s == target:
                return 1
            return 0
        return helper(i+1,s+arr[i]) + helper(i+1,s)
    return helper(0, 0)

# res = sumEqualsKCount([1,2,1],2)
# print(res)


# practise
# def fn(s):
#     res = []
#     n = len(s)
#     def helper(cur,i):    
#         if i == n:
#             res.append(cur)
#             return
#         helper(cur+s[i],i+1)
#         helper(cur,i+1)
#     helper('',0)
#     return res

# res = fn('abc')
# print(res)