from math import ceil

def fact(num):
    res = [1]
    for i in range(2,int(num**0.5) + 1):
        if num % i == 0:
            if i == num/i:
                res.append(i)
                continue
            res.append(i)
            res.append(num//i)
    return ("No","Yes")[sum(res) == num]

n = int(input())
print(fact(n))
    
