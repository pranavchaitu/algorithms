function getTotalX(a: number[], b: number[]): number {
    const lcmA = lcmArr(a)
    const gcdB = gcdArr(b)
    var count = 0
    for(var i=lcmA;i<=gcdB;i+=lcmA) {
        if(gcdB % i == 0) {
            count += 1
        }
    }
    return count
}

function gcd(a : number,b : number) : number {
    let temp : number
    while(b) {
        temp = b
        b = a % b
        a = temp
    }
    return a
}

function lcm(a : number, b : number) : number {
    return (a*b)/gcd(a,b)
}

function lcmArr(nums : number[]) : number {
    return nums.reduce((a,b) => lcm(a,b))
}

function gcdArr(nums : number[]) : number {
    return nums.reduce((a,b) => gcd(a,b))
}

console.log(lcmArr([8,12]));
console.log(gcdArr([8,12]));
