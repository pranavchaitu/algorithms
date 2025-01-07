def printName5Times(name,count):    
    if count == 0:
        return
    # we can use this to reverse/ backtrack call
    return print(name) or printName5Times(name,count-1)


# parametirezed
def sumOfNIntegersParametirezed(num,sum):
    if num < 1:
        print(sum)
        return
    return sumOfNIntegersParametirezed(num-1,sum+num)

# functional
def sumOfNIntegersFunctional(num):
    if num < 1:
        return num
    return num + sumOfNIntegersFunctional(num-1)

def fact(num):
    if num == 1:
        return 1
    return num * fact(num-1)

# need refactor
def reverseArr(arr):
    def helper(l,r):
        if l == r:
            return
        arr[l],arr[r] = arr[r],arr[l]
        helper(l+1,r-1)
    helper(0,len(arr)-1)
    return arr

def palindrome(s):
    def helper(l,r):
        if l >= r:
            return True
        if s[l] != s[r]:
            return False
        return helper(l+1,r-1)
    return helper(0,len(s)-1)
    
if __name__ == "__main__":
    # printName5Times('pranav',5)
    # sumOfNIntegersParametirezed(5,0) # 5 + 4 + 3 + 2 + 1 = 15
    # print(sumOfNIntegersFunctional(6))
    # print(fact(3))
    # print(reverseArr([1,3,24,43,4]))
    print(palindrome('sassas'))