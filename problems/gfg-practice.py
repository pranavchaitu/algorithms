# def searchInSorted(arr, k):
#     left = 0
#     right = len(arr)-1
#     while left <= right:
#         mid = (left + right) // 2
#         if k > arr[mid]:
#             left += 1
#         elif k < arr[mid]:
#             right -= 1
#         else:
#             return True
#     return False

# #            L(5)
# # [1,3,4,5,5,6]
# #            R(5)
# res = searchInSorted([1,3,4,5,5,6],6)
# print(res)

def getSecondLargest(arr):
    l = 0
    sl = 0
    for i in arr:
        if i > l:
            sl = l
            l = i
        elif i < l and  i > sl:
            sl = i
    return -1 if not sl else sl 

#        l
# [12,35,1,10,34,1]
#  sl

res = getSecondLargest([10,10,10])
print(res)