def numberOfPoints(nums: list[list[int]]) -> int:
    linesweep = [0] * 101
    for start, end in  nums:
        linesweep[start-1] += 1
        linesweep[end] -= 1
    count = 0
    for i in range(1,len(linesweep)):
        linesweep[i] += linesweep[i-1]            
        if linesweep[i] != 0:
            count += 1
    return (count + 1, count) [linesweep[0] == 0]

ans = numberOfPoints([[3,6],[1,5],[4,7]])
print(ans)