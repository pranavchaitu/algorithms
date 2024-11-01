function divide(dividend, divisor) {
    let i = false,j = false;
    if(dividend < 0) {
        i = true
        dividend *= - 1
    }
    if(divisor < 0) {
        j = true
        divisor *= - 1
    }
    
    if(i && !j || !i && j) {
        return -1 * Math.floor(dividend/divisor)
    } else {
        if(Math.floor(dividend/divisor) >= 2**31) {
            return 2**31 - 1
        }
        return  Math.floor(dividend/divisor)
    }
};

const ans = divide(-2147483648,-1)
console.log(ans);
