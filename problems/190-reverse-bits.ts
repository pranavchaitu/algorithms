//brute force
function reverseBits(n: number): number {
    let bin = n.toString(2).padStart(32,'0')
    return parseInt(bin.split('').reverse().join(''),2)
};

const res = reverseBits(43261596)
console.log(res);

