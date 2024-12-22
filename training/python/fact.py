dp = {}
def fact(n):
    if n <= 1:
        return n
    if n not in dp:
        dp[n] = fact(n-1) + fact(n-2)
    return dp[n]

def factorg(n):
    if n <= 1:
        return n
    return factorg(n-1) + factorg(n-2)

ans = fact(100)
print(ans)

# ans = factorg(40)
# print(ans)