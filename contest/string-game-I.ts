function kthCharacter(k: number): string {
    let res = "a"
    let currentWord = "a"
    while(res.length < k) {
        res += changeWord(currentWord)
        currentWord = res
    }    
    console.log(res);
    
    return res[k-1]  
};

function changeWord(str : string) : string {
    var res = ""
    for(var i=0;i<str.length;i++) {
        res += String.fromCharCode(str[i].charCodeAt(0) + 1)
    }
    return res
}

