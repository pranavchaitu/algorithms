function smallestNumber(n: number, t: number): number {
    while(product(n) % t != 0) {
        n += 1
    }
    return n
};

function product(num : number) : number {
    return num.toString().split('').reduce((a,b) => Number(a)*Number(b),1)
}

// const ans = smallestNumber(10,2)
const ans = smallestNumber(15,3)
console.log(ans);
