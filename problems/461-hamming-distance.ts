function hammingDistance(x: number, y: number): number {
    const xor = x ^ y;
    const distance = xor.toString(2).split('').filter(bit => bit === '1').length;
    return distance;
}


