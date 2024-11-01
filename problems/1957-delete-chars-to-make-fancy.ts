function makeFancyString(s: string): string {
    let res = s[0] || "";
    let temp = 0;
    for(let r=1;r<s.length;r++) {
        if(s[r] == s[r-1]) {
            temp += 1
            console.log(r)
            if(temp >=2) continue
        } else {
            temp = 0
        }
        res += s[r]
    }
    return res
};

const ans = makeFancyString("aaabaaaa")
console.log(ans)