/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let l = 0;
    let max = 0;
    for(let r in s){
        while(charSet.has(s[r])){
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        max = Math.max(max, r - l + 1);     
    }
    return max;
};

const ans = lengthfdfdOfLongestSubstring('abcabcbb');
console.log(ans);