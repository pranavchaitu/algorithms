# Printing name i times
def printname(i,name):
    if i == 0:
        return
    print(name)
    printname(i-1,name)
# printname(5,'pranav')

# recursion

# 1-N
def printAscendingRecursive(i,n):
    if i > n:
        return
    print(i)
    printAscendingRecursive(i+1,n)
# printAscendingRecursive(1,5)

# N-1
def printDescendingRecursive(n):
    if n == 0:
        return
    print(n)
    printDescendingRecursive(n-1)
# printDescendingRecursive(5)


# backtracking

# 1-N
def printAscendingBacktrack(n):
    if n < 1:
        return
    printAscendingBacktrack(n-1)
    print(n)
# printAscendingBacktrack(5)

# N-1
def printDescendingBacktrack(i,n):
    if i > n:
        return
    printDescendingBacktrack(i+1,n)
    print(i)
printDescendingBacktrack(1,5)