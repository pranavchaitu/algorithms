// brute-force
function countBits(n: number): number[] {
    const res = []
    for(var i=0;i<=n;i++) {
        res.push(findOnes(i))
    }
    return res
};

function findOnes(n : number) : number {
    const bin = n.toString(2)
    let count = 0
    for(var i of bin) {
        if(i == "1") {
            count += 1
        }
    }
    return count
}

const ans = countBits(5)
console.log(ans);
