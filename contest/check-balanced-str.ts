function isBalanced(num: string): boolean {
    let evenSum = 0
    let oddSum = 0
    for(var i=0;i<num.length;i++) {
        if(i%2) {
            //odd
            oddSum += Number(num[i])
        } else {
            evenSum += Number(num[i])
        }
    }
    return evenSum == oddSum
};