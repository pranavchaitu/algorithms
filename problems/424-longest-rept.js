/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = {}
    let res = 0
    let l = 0
    let maxF = 0;
    for(let r in s){
        map[s[r]] = ++map[s[r]] || 1;
        maxF = Math.max(maxF,map[s[r]]);
        while((r - l + 1) - maxF > k){
            map[s[l]] -= 1   
            l++
        }
        res = Math.max(res,  r - l + 1);
    }
    return res;
};

console.log(characterReplacement("AABABBA",1));