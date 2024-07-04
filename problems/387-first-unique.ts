function firstUniqChar(s: string): number {
    var map : Record<string,number> = {}
    for(var i of s) {
        map[i] = ++map[i] || 1
    }
    for(var j=0;j<s.length;j++){
        if(map[s[j]] === 1) return j
    }
    return -1
};
