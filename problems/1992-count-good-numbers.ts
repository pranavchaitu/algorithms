function countGoodNumbers(n : any) {
    n = BigInt(n)
    let mod = BigInt(10 ** 9 + 7)
    let even = (n + 1n)/ 2n
    let odd = n / 2n
    let first = pow(5n,even,mod) % mod
    let second = pow(4n,odd,mod) % mod
    return (first*second) % mod
};

function pow(x :any, n : any, mod : any) {
    if(n == 0n) return 1n
    let res = pow(BigInt(x), n/2n, mod)
    if(n % 2n == 0n) return (res * res) % mod
    else return (x * res * res) % mod
}

function isGoodDigitString(s : string) : boolean {
    let primes = new Set(['2','3','5','7'])
    let evens = new Set(['0','2','4','6','8'])
    for(var i=0;i<s.length;i++) {
        if(!(((i % 2 == 0) && evens.has(s[i])) || 
             (i % 2 && primes.has(s[i]))
            )) 
        {
            return false
        } 
    }
    return true
}

console.log(isGoodDigitString("0245"))
console.log(isGoodDigitString("2582"))