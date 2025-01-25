test_cases = int(input())

res = []
for _ in range(test_cases):
    n = int(input())
    arr = list(map(int,(input().split())))
    q = int(input())
    temp = []
    for _ in range(q):
        query = list(map(int,(input().split())))
        if query[0] == 1:
            start, stop = query[1], query[2]
            temp.append(max(arr[start-1:stop]))
        elif query[0] == 2:
            i,j,x = query[1], query[2], query[3]
            arr[i-1:j] = list(map(lambda a : a + x,arr[i-1:j]))
    res.append(temp)

for test_cases in res:
    for i in test_cases:
        print(i)
    print()