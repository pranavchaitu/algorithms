def swap(i,j,arr):
    arr[i],arr[j] = arr[j],arr[i]

# WHERE WE TAKE THE SMALL ELEMENT AND PUT AT THE START(CUR), NO NEED TO GO TILL LAST
def selection_sort(arr):
    for i in range(len(arr)-1):
        m = i
        for j in range(i+1,len(arr)):
            if arr[j] < arr[m]:
                m = j
        # SWAPPING MIN ELEMENT WITH THE CUR INDEX
        arr[i],arr[m] = arr[m],arr[i]

# HERE WE GO ON EVERY SUBSEQUENCE ITERATION AND SWAP FOR N TIMES ACTUALLY (SUM OF N NATURAL NUMBER)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1,0,-1):
        flag = False
        for j in range(i):
            if arr[j+1] < arr[j]:
                arr[j+1],arr[j] = arr[j],arr[j+1]
                flag = True
        # JUST AN OPTIMISATION FOR BEST CASE(O(N))
        if not flag:
            break

# WHERE WE ITERATE OVER EVERY ELEMENT AND PLACE IT IN IT'S POS(BASICALLY CHECK THE FULL LEFT AND SWAP IF CUR IS SMALLER)

def insertion_sort(arr):
    for i in range(1,len(arr)):
        j = i
        while j > 0 and arr[j] < arr[j-1]:
            swap(j-1,j,arr)
            # arr[j-1],arr[j] = arr[j],arr[j-1]
            j-= 1

A = list(map(int,input().split()))
# selection_sort(A)
# bubble_sort(A)
insertion_sort(A)
print(A)