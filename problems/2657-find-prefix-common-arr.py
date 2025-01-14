def findThePrefixCommonArray(A, B):
    res = []
    a = set()
    b = set()
    for i in range(len(A)):
        a.add(A[i])   
        b.add(B[i])   
        res.append(len(a & b))
    return res

findThePrefixCommonArray([1],[3])
    
