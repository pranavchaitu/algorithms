# class Solution:
#     def findValidPair(self, s: str) -> str:
#         c = Counter(s)
#         for i in range(len(s)-1):
#             if s[i] != s[i+1] and c[s[i]] == s[i] and c[s[i+1]] == s[i+1]:
#                 return s[i]+s[i+1]
#         return ""©leetcode

def max_manhattan_distance(s: str, k: int) -> int:
    x = 0
    y = 0
    m = 0
    for i in s:
        if k:
            if y < 0 and i == 'N':
                y -= 1
                k -= 1
        else:

            if i == 'N':
                y += 1
            elif i == 'S':
                y -= 1
            elif i == 'E':
                x += 1
            else:
                x -= 1
            m = max(m,abs(x)+abs(y))
        return m`

print(max_manhattan_distance("NSWWEW", 3))  