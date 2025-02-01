def combinationSum2(candidates: list[int], target: int) -> list[list[int]]:
    candidates.sort()
    res = []
    n = len(candidates)
    def helper(idx,temp,t):
        if t == 0:
            res.append(temp)
            return
        for i in range(idx,n):
            if i > idx and candidates[i] == candidates[i-1]:
                continue
            if candidates[i] > t:
                break
            helper(i+1,temp+[candidates[i]],t-candidates[i])
    helper(0,[],target)
    return res

res = combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],30)
print(res)