def nextGreatestLetter(letters: list[str], target: str) -> str:
    n = len(letters)
    target = ord(target)
    left,right = 0,n-1
    while left <= right:
        mid = (left + right) // 2
        cur = ord(letters[mid])
        if target < cur:
            right = mid - 1
        elif target > cur:
            left = mid + 1
        else:
            # while 
            if mid < n - 1:
                return letters[mid+1]
            return letters[mid]
    if left >= n:
        return letters[0]
    return letters[left]

ans = nextGreatestLetter(["e","e","g","g"],'g')
print(ans)