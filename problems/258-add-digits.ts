function addDigits(num: number): number {
    while(num > 9) {
        num = findSum(num)
    }
    return num;
};

function findSum(n : number) {
    return n.toString().split('').reduce((a,b) => Number(a)+Number(b),0)
}