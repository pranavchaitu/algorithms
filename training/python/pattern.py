# 1*2*3*4*17*18*19*20
#   5*6*7*14*15*16
#     8*9*12*13
#      10*11

def pattern(n):
    cur = 1
    part2 = n**2 + 1
    for i in range(n):
        res = ""
        for k in range(i):
            res += "  "
        for j in range(n-i):
            res += str(cur)
            res += "*"
            cur += 1
        for j in range(n-i):
            res += str(part2)
            res += "*"
            part2 += 1
        part2 = part2 - 1 - 2*(n-1-i)
        print(res[:-1])

# pattern(int(input()))

def box(n):
    for i in range(1,n+1):
        res = ""
        for j in range(1,n+1):
            if i == 1 or j == 1 or i == n or j == n or i == j or i + j == n + 1:
                res += "* "
            else:
                res += "  "
        print(res)

# box(int(input()))

def diamond(n):

    for i in range(n):
        res = ""
        mid = n // 2
        for j in range(n):
            if (i == mid and j == 0) or (i == 0 and j == mid) or (i == n - 1 and j == mid) or (j == n - 1 and i == mid) or (i + j == mid) or (abs(i - j) == mid) or (i+j == n  + mid - 1):
                res += "* "
            else:
                res += "  "
        print(res)

diamond(int(input()))