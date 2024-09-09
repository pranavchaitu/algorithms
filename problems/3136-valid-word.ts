function isValid(word: string): boolean {
    const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"])
    const digits = new Set(["0","1","2","3","4","5","6","7","8","9"])
    if(word.length < 3) return false
    var oneVowel = false
    var oneConsonant = false
    for(var i of word) {
        if(vowels.has(i)) {
            console.log(i,"vowels if");
            oneVowel = true
        } else if(digits.has(i)) {
            console.log(i,"digits if");
        } else if((i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) || (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) ){
            console.log(i,"consonants if");
            oneConsonant = true            
        } else {
            return false
        }
    }
    return oneVowel && oneConsonant
};

const ans = isValid("234Adas")
console.log(ans);
