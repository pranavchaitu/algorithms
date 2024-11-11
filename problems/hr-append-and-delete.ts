function appendAndDelete(s: string, t: string, k: number): string {
    if (t.length > s.length) {
        if(t.startsWith(s) && t.endsWith(s)) {
            return "Yes"
        }
        return "No"
    }
    let totalLen = s.length + t.length;
    let si = 0;
    let ti = 0;
    let count = 0;
    while(s[si] && t[ti] && s[si] == t[ti]) {
        count += 1
        si += 1
        ti += 1
    } 
    return totalLen - 2*count <= k ? "Yes" : "No";
}

const ans = appendAndDelete('y','yu',2)
console.log(ans);
