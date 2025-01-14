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
# parametertized
def reverseArrWithParams(i,arr,n):
    if i >= n // 2:
        # for size 5 just until 0,1 and not even simillarly for size 6 -> 0,1,2 enough 
        return arr
    arr[i],arr[n-1-i] = arr[n-1-i],arr[i]
    return reverseArrWithParams(i+1,arr,n)


def palindrome(s):
    def helper(l,r):
        if l >= r:
            return True
        if s[l] != s[r]:
            return False
        return helper(l+1,r-1)
    return helper(0,len(s)-1)   
# parametirized
def justCheckPalindrome(i,s):
    n = len(s)
    if i >= n // 2:
        return True
    if s[i] != s[n-i-1]:
        return False
    return justCheckPalindrome(i+1,s)

def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

if __name__ == "__main__":
    # printName5Times('pranav',5)
    # sumOfNIntegersParametirezed(5,0) # 5 + 4 + 3 + 2 + 1 = 15
    # print(sumOfNIntegersFunctional(6))
    # print(fact(3))
    # print(reverseArr([1,3,24,43,4]))
    # print(reverseArrWithParams(0,[1,3,24,43,4],5))
    # print(palindrome('sassas'))
    # print(justCheckPalindrome(0,'sassaas'))
    print(fib(4)) # 0 1 1 2 3 5
    
    