
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

arr = [1,4,3,2]
quickSort(arr,0,len(arr)-1)
print(arr)


# def merge_sort