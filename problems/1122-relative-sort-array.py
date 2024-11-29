class Solution:
    def relativeSortArray(self, arr1: list[int], arr2: list[int]) -> list[int]:
        def fun(i):
            if i in arr2:
                return arr2.index(i)
            return len(arr2)
        arr1.sort(key = fun)
        ans = len(arr1) - 1 - arr1[::-1].index(arr2[-1])
        return (arr1[:ans+1] + sorted(arr1[ans+1:]))