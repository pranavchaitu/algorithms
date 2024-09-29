function countVowelSubstrings(word: string): number {
    let count = 0
    for(var i=0;i<word.length;i++) {
        const seen = new Set()
        for(var j=i;j<word.length;j++) {
            if("aeiou".includes(word[j])) {
                seen.add(word[j])
                if(seen.size == 5) count++
            } else {
                break
            }
        }
    }
    return count
};