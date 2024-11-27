#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'hackerrankInString' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def hackerrankInString(s):
    target = 'hackerrank'
    i = 0
    while i < len(s):
        if target == '':
            return 'YES'
        while i < len(s) and target[0] != s[i]:
            i += 1
        target = target[1:]
        i += 1
    return ('NO','YES')[target == '']

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        s = input()

        result = hackerrankInString(s)

        fptr.write(result + '\n')

    fptr.close()
