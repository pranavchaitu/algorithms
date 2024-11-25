#!/bin/python3

import math
import os
import random
import re
import sys

def generateFactors(n):
    res = []
    for i in range(1,int(n**0.5) + 1):
        if n % i == 0: 
            if i == n/i:
                res.append(i)
                continue
            res.append(i)
            res.append(n//i)
    return res    

def digitSum(n):
    s = str(n)
    sum = 0
    for i in s:
        sum += int(i)
    return sum

if __name__ == '__main__':
    n = int(input().strip())
    arr = generateFactors(n)
    maxVal = 0
    maxSum = 0
    for i in arr:
        curSum = digitSum(i)
        if curSum > maxSum:
            maxSum = curSum
            maxVal = i
        if curSum == maxSum and i < maxVal:
            maxVal = i
    print(maxVal)
    