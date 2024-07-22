// recursive function to print a sum form 0 to given range
function sumRange(n : number) : number {
    if(n == 1) return 1
    return n + sumRange(n-1)
}

const ans = sumRange(6)
console.log(ans);
