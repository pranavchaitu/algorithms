def maxDistinctElements(nums, k) -> int:
    s = set()
    p = float('-inf')
    for i in nums:
        p = max(p,i-k)
        for j in range(p,i+k+1):
            if j not in s:
                s.add(j)
                # states that until p all the left values are over/used
                p += 1
                break
    return len(s)

# ans = maxDistinctElements([7,7,8,8,8,10],1)
ans = maxDistinctElements([7,7,8,8,10],1)
print(ans)