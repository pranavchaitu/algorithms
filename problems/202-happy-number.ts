function isHappy(n: number): boolean {
    let map = {}
    while(!map[n] && n != 1) {
        map[n] = true
        n = squareSum(n)
    }
    return n == 1 ? true : false
};

function squareSum(n : number) {
    let res = 0;
    let rem : number;
    while(n > 0) {
        rem = n % 10;
        res += (rem ** 2)
        n = Math.floor(n/10)
    }
    return res
}