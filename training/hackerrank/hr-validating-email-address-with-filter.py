def fun(s):
    if '@' not in s or '.' not in s or s.count('@') > 1 or s.count('.') > 1:
        return False
    if s.index('@') > s.index('.'):
        return False
    arr = s.split('@')
    username = arr[0]
    websitename = arr[1].split('.')[0]
    extention = arr[1].split('.')[1]
    if len(extention) > 3 or not len(username):
        return False
    for i in username:
        if not (i.isalnum() or i == '_' or i == '-'):
            return False
    for i in websitename:
        if not i.isalnum():
            return False
    for i in extention:
        if not i.isalpha():
            return False
    return True
def filter_mail(emails):
    return list(filter(fun, emails))

if __name__ == '__main__':
    n = int(input())
    emails = []
    for _ in range(n):
        emails.append(input())

filtered_emails = filter_mail(emails)
filtered_emails.sort()
print(filtered_emails)

