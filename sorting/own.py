# GIVEN TWO SORTED ARRAY MERGE THEM AS A SINGLE SORTED ARRAY
def hypothetic_merge(l,mid,r,arr):
    a = arr[l:mid]
    b = arr[mid:r]
    i = 0
    j = 0
    res = []
    while i != len(a) and j != len(b):
        if a[i] <= b[j]:
            res.append(a[i])
            i += 1
        else:
            res.append(b[j])
            j += 1
    res.extend(a[i:]+b[j:])
    for i in range(len(res)):
        arr[i+l] = res[i]

# res = hypothetic_merge([1,3,4],[1,5,7]) #should result in [1,1,3,4,5,7]
# print(res)

def merge_sort(l,h,arr):
    if l == h:
        return
    mid = (l + h) // 2
    merge_sort(l,mid,arr)
    merge_sort(mid,h,arr)
    hypothetic_merge(l,mid,h,arr)

arr = [1,4,3,2]
merge_sort(0,len(arr),arr)
print(arr)
    