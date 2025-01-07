# non-recursive way
def printInOrderNormal(start,stop):
    for i in range(start,stop+1):
        print(i)

# recursive way


# ascending

# normal
def printInOrderRecursive(start,stop):
    if start == stop + 1:
        return
    print(start)
    printInOrderRecursive(start+1,stop)
#backtrack
def printInOrderRecursiveBacktrack(start):
    if start < 1:
        return
    printInOrderRecursiveBacktrack(start-1)
    print(start)

# descending

# normal
def printInOrderRecursiveRev(stop):
    if stop < 1:
        return
    print(stop)
    printInOrderRecursiveRev(stop-1)
# backtrack
def printInOrderRecursiveRevBacktrack(start,stop):
    if start > stop:
        return
    return printInOrderRecursiveRev(start+1,stop) or print(start)


if __name__ == '__main__':
    printInOrderRecursiveRev(100)