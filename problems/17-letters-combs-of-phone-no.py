def letterCombinations(digits: str) -> list[str]:
    data = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    }
    n = len(digits)
    res = []
    def helper(i,s):
        if i == n:
            res.append(s) if s else None
            return
        cur = digits[i]
        for char in data[cur]:
            helper(i+1,s+char)
    helper(0,'')
    return res

res = letterCombinations(['2','3'])
print(res)