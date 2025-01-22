class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        cur = 0
        for i in t:
            if cur < len(s) and s[cur] == i:
                cur += 1
        return cur == len(s)

        # i = 0
        # while s and i < len(t):
        #     if s[0] == t[i]:
        #         s = s[1:]
        #     i += 1
        # return False if s else True 