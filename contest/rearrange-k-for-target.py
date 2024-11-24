from math import floor

def generateSubarr(arr, inc):
    res = []
    for i in range(0,len(arr),inc):
        if i + inc < len(arr) + 1:
            res.append(arr[i:i+inc])
    return res

def isPossibleToRearrange(s: str, t: str, k: int) -> bool:
    partLen = (len(s) / k)
    arrs = generateSubarr(s, floor(partLen))
    arrs2 = generateSubarr(t, floor(partLen))
    arrs.sort()
    arrs2.sort()
    return arrs == arrs2

ans = isPossibleToRearrange("nngggnng","nnggnngg"
,2)
print(ans)
# ans = isPossibleToRearrange('aabbcc','bbaacc',3)
# print(ans)
# ans = isPossibleToRearrange('aabbcc','bbaacc',2)
# print(ans)
