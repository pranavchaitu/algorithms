def fun(s):
    arr = s.split(' ')
    if arr[0] == 'hackerrank' and arr[-1] == 'hackerrank':
        return 0
    elif arr[0] == 'hackerrank':
        return 1
    elif arr[-1] == 'hackerrank':
        return 2
    else:
        return -1
 
    
def filter_mail(emails):
    return list(filter(fun, emails))

if __name__ == '__main__':
    n = int(input())
    emails = []
    for _ in range(n):
        emails.append(input())
    print(filter_mail(emails))
    # for i in filter_mail(emails):
    #     print(i)
