# parameterized
def sumoffirstnnumbers(num,sum):
    if num < 1:
        print(sum)
        return
    return sumoffirstnnumbers(num-1,sum+num)
# sumoffirstnnumbers(5,0)

# functional
def sumoffirstnnumbersfun(n):
    if n == 1:
        return 1
    return n + sumoffirstnnumbersfun(n-1)
# print(sumoffirstnnumbersfun(5))

# fact
def fact(n):
    if n == 1:
        return 1
    return n * fact(n-1)
# print(fact(3))

# computing sum of numbers from 1 -> n where we get n 
# def count(n,sum):
#     if n < 1:
#         print(sum)
#         return
#     count(n-1,sum + n)

# actual solution

# def sum(num):
#     s = 0
#     def count(n):
#         nonlocal s
#         if n < 1:
#             return
#         count(n-1)
#         s += n
#     count(num)
#     return s

# res = sum(5)
# print(res)    