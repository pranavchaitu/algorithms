function myAtoi(s: string): number {
    let i = 0;
    let res = 0
    let sign = 1

    while(i < s.length && s[i] === " ") {
        i += 1
    }

    if(i < s.length && s[i] == "+" || s[i] == "-" ) {
        sign = (s[i] == "-") ? -1 : 1
        i += 1
    }

    while(i < s.length && s[i] >= "0" && s[i] <= "9") {
        res = res * 10 + Number(s[i])
        if(res * sign > 2147483647) return 2147483647
        if(res * sign < -2147483648) return -2147483648
        i += 1
    }
    return sign * res 
};

const res = myAtoi(" 0012a")
console.log(res);

