#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'getMax' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts STRING_ARRAY operations as parameter.
#

def getMax(operations):
    res = []
    s = []
    m = []
    for i in operations:
        if len(s) and i == '2':
            val = s.pop()
            m.remove(val)
        elif i == '3':
            res.append(m[-1])
        else:
            cur = int(i.split()[1])
            m.append(cur)
            m.sort()
            s.append(cur)
    return res

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ops = []

    for _ in range(n):
        ops_item = input()
        ops.append(ops_item)

    res = getMax(ops)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()
