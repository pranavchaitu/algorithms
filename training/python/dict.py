# import string
# d = {}

# s = string.ascii_lowercase[::-1]
# for i in range(26):
#     d[i+1] = s[i]
# print(d.__getitem__)

from collections import Counter

def myCounter(arr):
    m = {}
    for i in arr:
        m[i] = m.get(i,0) + 1
    return m


# two ways of counter
d = Counter([1,2,1,2,3,4,3,3])
print(d)
    
d = myCounter([1,2,1,2,3,4,3,3])
d = dict(sorted(d.items(),key=lambda x:x[1],reverse=True))
print(d)
