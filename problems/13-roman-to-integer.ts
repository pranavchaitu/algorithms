function romanToInt(s : string) : number {
    var obj : Record<string,number> = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    var res : number = 0
    for(var i=0;i<s.length;i++) {
        if(obj[s[i]] > obj[s[i-1]]) {
            res += obj[s[i]] - 2*obj[s[i-1]]
        } else {
            res += obj[s[i]]
        }
    }
    return res
};
