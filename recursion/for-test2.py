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
print(fact(3))
