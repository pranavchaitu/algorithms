function countOfSubstrings(word: string, k: number): number {
    let seen : Set<string>;
    let consonants : number;
    let count = 0
    for(let i=0;i<word.length;i++) {
        consonants = 0
        seen = new Set()
        for(let j=i;j<word.length;j++) {
            if("aeiou".includes(word[j])) {
                seen.add(word[j])
            } else {
                consonants += 1
            }

            if(seen.size == 5 && consonants == k) {
                count += 1
            }
        }
    }
    return count
};

const ans = countOfSubstrings("ieaouqqieaouqq",1)
console.log(ans);
