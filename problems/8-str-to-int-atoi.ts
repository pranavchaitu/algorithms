function myAtoi(s: string): number {
    if(s[0] == "-") {
        s = s.slice(1)
    }
    let res = 0
    for(var i=0;i<s.length;i++) {
        if(Number(s[i]) > 0 && Number(s[i]) < 10) {
            res += Number(s[i])
        } else if(Number(s[i]) == 0) {
            continue
        } else {
            res /= 10
            return res
        }
        res *= 10
    }
    res /= 10
    return res
};

console.log(myAtoi("1337c0d3"))