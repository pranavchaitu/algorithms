function canConstruct(ransomNote: string, magazine: string): boolean {
    let map = new Map()
    for(var i of magazine) {
        map.set(i,map.get(i) + 1 || 1)
    }
    for(var i of ransomNote) {
        if(map.has(i) && map.get(i) > 0) {
            map.set(i,map.get(i)-1)
        } else {
            return false
        }
    }
    
    return true
};

const res = canConstruct('aa','aab')
console.log(res);
