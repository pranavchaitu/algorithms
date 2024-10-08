function isPowerOfTwo(n: number): boolean {
    while(n) {
        if(n == 1) {
            return true
        }
        n = n/2      
    }
    return false
};

const ans = isPowerOfTwo(1)
console.log(ans);
