class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key = lambda a : a[0])
        res = [intervals[0]]
        for start, end in intervals[1:]:
            last = res[-1]
            if start <= last[1]:
                last[1] = max(last[1], end)
            else:
                res.append([start, end])
        return res

# own
# class Solution:
#     def merge(self, intervals: List[List[int]]) -> List[List[int]]:
#         linesweep = [0] * 10002
#         for start, end in intervals:
#             linesweep[start] += 1
#             linesweep[end] -= 1
#         res = []
#         for i in range(1,len(linesweep)):
#             linesweep[i] += linesweep[i-1]
#         started = True if linesweep[0] else False
#         start = 0
#         for i in range(1,len(linesweep)):            
#             if not started and linesweep[i] != 0:
#                 start = i
#                 started = True
#             if started and linesweep[i] == 0:
#                 res.append([start,i])
#                 start = 0
#                 started = False
#         return res