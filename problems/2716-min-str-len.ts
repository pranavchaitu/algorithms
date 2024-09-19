function minimizedStringLength(s: string): number {
    const map : Map<string,number> = new Map()
    var count : number = 0 
    for(var i of s) {
        if(!map.get(i)) {
            map.set(i,1)
        } else {
            count += 1
        }
    }   
    return s.length - count
};


const ans = minimizedStringLength("baadccab")
console.log(ans);
