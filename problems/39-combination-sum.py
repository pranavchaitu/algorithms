def combinationSum(candidates, target):
    res = []
    n = len(candidates)
    def helper(ans,temp,i,t):
        if i == n:
            if t == 0:
                ans.append(temp)
            return
        if candidates[i] <= t:
            # then only we pick
            helper(ans,temp+[candidates[i]],i,t-candidates[i])
        helper(ans,temp,i+1,t) 
    helper(res,[],0,target)
    return res

res = combinationSum([2,3,5],8)
print(res)

# Output: [[2,2,2,2],[2,3,3],[3,5]]