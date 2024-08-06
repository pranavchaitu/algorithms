function isPowerOfThree(n: number): boolean {
    if(n == 0) return false
    if(n%3 !== 0 && n !== 1) return false
    if(n == 1) return true
    return isPowerOfThree(n/3)
};

const res = isPowerOfThree(1)
console.log(res);
