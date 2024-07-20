function sockMerchant(n: number, ar: number[]): number {
    const map = new Map<number,number>()
    for(let i of ar) {
        map.set(i,(map.get(i) || 0) + 1)
    }
    console.log(map)
    var res = 0
    map.forEach((count,i) => {
        res += (Math.floor(count/2))        
    })
    return res
}

const res = sockMerchant(7,[1,1,3,1,2,1,3,3,3,3])
console.log(res);
