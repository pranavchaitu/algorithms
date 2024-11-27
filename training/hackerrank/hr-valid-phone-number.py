def fun(s):
    if len(s) != 10:
        return print('NO')
    if s[0].isdecimal() and int(s[0]) not in range(7,10):
        return print('NO')
    for i in s:
        if not i.isdecimal():
            return print('NO')
    return print('YES')
    
def filter_mail(emails):
    return list(filter(fun, emails))

if __name__ == '__main__':
    n = int(input())
    emails = []
    for _ in range(n):
        emails.append(input())

filter_mail(emails)