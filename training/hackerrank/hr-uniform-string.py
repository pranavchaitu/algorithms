#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'weightedUniformStrings' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER_ARRAY queries
#

def weightedUniformStrings(s, queries):
    res = []
    cur = 0
    m = set()
    m.add((ord(s[0])- ord('a')+1))
    while cur < len(s) - 1:
        temp = 1
        m.add(temp * (ord(s[cur])-ord('a') + 1))
        while cur < len(s) - 1 and s[cur] == s[cur+1]:
            temp += 1
            m.add(temp * (ord(s[cur])-ord('a') + 1))
            cur += 1
        cur += 1
        if cur == len(s) - 1:
            m.add(1 * (ord(s[cur])-ord('a') + 1))
    res = []
    for i in queries:
        if i not in m:
            res.append("No")
        else:
            res.append("Yes")
    return res
    
if __name__ == '__main__':
    s = input()
    print(weightedUniformStrings(s,[1,12]))
