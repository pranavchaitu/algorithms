#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'superReducedString' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def superReducedString(s):
    i = 0
    while i < len(s) - 1:
        if s[i] == s[i+1]:
            s = s[:i] + s[i+2:]
            i = 0
        else :
            i += 1
    return ('Empty String',s)[len(s) != 0]

if __name__ == '__main__':

    s = input()

    result = superReducedString(s)

    print(result + '\n')

