def solveNQueens(n):
    cols = set()    
    posDiag = set()    
    negDiag = set()    
    res = []
    board = [['.'] * n for i in range(n)]
    
    def backtrack(r):
        if r == n:
            copy = [''.join(i) for i in board]
            res.append(copy)
            return

        for c in range(n):
            if c in cols or (r-c) in negDiag or (r+c) in posDiag:
                continue
            cols.add(c)
            negDiag.add(r-c)
            posDiag.add(r+c)
            board[r][c] = 'Q'
            
            backtrack(r+1)

            cols.remove(c)
            posDiag.remove(r+c)
            negDiag.remove(r-c)
            board[r][c] = '.'
        
    backtrack(0)
    return res

ans = solveNQueens(4)
print(ans)