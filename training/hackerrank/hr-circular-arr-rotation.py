#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'circularArrayRotation' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER k
#  3. INTEGER_ARRAY queries
#

def circularArrayRotation(a, k, queries):
    new = a.copy()
    print(a, k, queries)
    for i in range(len(a)):
        new[(i + k) % len(a)] = a[i]
    res = []
    for i in queries:
        res.append(new[i])
    return res
        
    
        

if __name__ == '__main__':
    circularArrayRotation([1, 2, 3],2, [0, 1, 2])
