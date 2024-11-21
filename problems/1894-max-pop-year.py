# def maximumPopulation(logs: list[list[int]]) -> int:
#     linesweep = {}
#     for start,end in logs:
#         linesweep[start] = linesweep.get(start,0) + 1
#         linesweep[end] = linesweep.get(end,0) - 1
#     arr = list(linesweep.items())
#     arr.sort(key = lambda i : i[0])
#     ans = logs[0][0]
#     maxVal = 0
#     cur = 0
#     for i,j in arr:
#         cur += j
#         if cur > maxVal:
#             maxVal = cur
#             ans = i
#     return ans

def maximumPopulation(logs: list[list[int]]) -> int:
    linesweep = [0] * (100 + 1)
    for birth,death in logs:
        linesweep[birth-1950] += 1
        linesweep[death-1950] -= 1
    for i in range(1,100):
        linesweep[i] += linesweep[i-1]
    maxCount = max(linesweep)
    year = linesweep.index(maxCount)
    return year + 1950

ans = maximumPopulation([[1993,1999],[2000,2010],[1997,2003],[2002,2007]])
# ans = maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])

print(ans)
