def divisors(n):
    res = 0
    for i in range(1,round(n**0.5) + 1):
        if n % i == 0: 
            if i == n/i and i % 2 == 0:
                res += 1
                continue
            if i % 2 == 0:
                res += 1
            if (n // i) % 2 == 0:
                res += 1
    return res

ans = divisors(100)
print(ans) #6 -> count of even divisors

# 1 2 4 5 10 20 25 50 100
