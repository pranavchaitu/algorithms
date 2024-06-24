function getRow(n : number) : number[] {
    // for zero-indexed
    n++
    const res : number[] = [1]
    var ans = 1
    for(var i=1;i<n;i++) {
        ans *= (n - i) / i
        res.push(ans)
    }
    return res
}   

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))