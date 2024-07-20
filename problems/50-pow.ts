function myPow(x: number, n: number): number {
    var res = helper(x,Math.abs(n))
    return n < 0 ? 1/res : res
};

function helper(x : number,n : number) : number {
    if(x == 0) return 0
    if(n == 0) return 1
    var res = helper(x,Math.floor(n/2))
    res *= res
    return n % 2 ? x * res : res
}