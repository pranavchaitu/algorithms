// iterative way of finding factorial
function factItr(n : number) : number {
    let res = 1
    for(let i=1;i<=n;i++) {
        res *= i
    }
    return res
}

// recursive way of finding factorial
function fact(n : number) : number {
    if(n == 1) return 1
    return n * fact(n-1)
}

export const ans = fact(5)
console.log(ans);
