
# makes the pivot at its pos and return it
def findPartition(low,high,arr):
    pivot = arr[low]
    left = low
    right = high
    while left < right:
        while arr[left] <= arr[pivot] and left < high:
            left += 1
        while arr[right] > arr[pivot] and right > low:
            right -= 1
        if left >= right: break
        arr[left],arr[right] = arr[right],arr[left]
    arr[right],arr[pivot] = arr[pivot],arr[right]
    return right 


def quickSort(arr,low,high):
    if low >= high:
        return
    partition = findPartition(low,high,arr)
    quickSort(arr,low,partition-1)
    quickSort(arr,partition+1,high)

# quickSort(arr,0,len(arr)-1)

arr = [7,2,4,3,1]

def merge(l,h,mid,arr):
    i = l
    j = mid + 1
    res = []
    while i <= mid and j <= h:
        if arr[i] <= arr[j]:
            res.append(arr[i])
            i += 1
        else:
            res.append(arr[j])
            j += 1
    res.extend(arr[i:mid+1])
    res.extend(arr[j:h+1])
    for i in range(l,h+1):
        arr[i] = res[i-l]

def merge_sort(arr,low,high):
    if low >= high:
        return
    mid = (low + high) // 2
    merge_sort(arr,low,mid)
    merge_sort(arr,mid+1,high)
    merge(low,high,mid,arr)

merge_sort(arr,0,len(arr)-1)
print(arr)