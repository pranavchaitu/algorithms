function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    var str1 = ""
    var str2 = ""
    for(var i of firstWord) {
        str1 += (i.charCodeAt(0) - 97)
    }            
    for(var i of secondWord) {
        str2 += (i.charCodeAt(0) - 97)
    }   
    var targetStr = ""
    for(var i of targetWord) {
        targetStr += (i.charCodeAt(0) - 97)
    }
    return (Number(str1) + Number(str2)) === Number(targetStr) 
};