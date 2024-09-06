function longestCommonPrefix(strs: string[]): string {
    let str = strs[0]
    for(var i=0;i<strs.length;i++) {
        while(!strs[i].startsWith(str)) {
            str = str.substr(0,str.length-1)
        }
        if(str == "") return ""
    }
    return str
};

const ans = longestCommonPrefix(["flower","flow","flight"])
console.log(ans);
