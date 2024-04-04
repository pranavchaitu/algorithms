/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = {};
    let minLen = Infinity;
    let sIndex = -1;
    let count = 0;
    for(let i in s){
        for(let j=0;j<t.length;j++){
            map[t[j]] = ++map[t[j]] || 1;
        }
        for(let j=0;j<s.length;j++){
            if(map[s[j]] > 0){
                count++;
                map[s[j]]--;
            }
            if(count === t.length){
                if(j-i+1 < minLen){
                    sIndex = i;
                    minLen = j- i + 1;
                    break;
                }
            }
        }   
    }
    return s.substr(sIndex,minLen);
};