function reverse(num : number) : number {
    var res = 0;
    while(num) {
        const rem = num % 10
        res = res * 10 + rem;
        num = Math.floor(num/10)
    }
    return res
}

const res = reverse(233310)
console.log(res);
