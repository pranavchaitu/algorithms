function findDigits(n: number): number {
    let str = n.toString();
    let res = 0 
    for(let i of str) {
        if(Number(i) && !(n % Number(i))) {
            res += 1
        }        
    }
    return res
}

const res = findDigits(1012)     //3
console.log(res);
