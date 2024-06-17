function pairs(k: number, arr: number[]): number {
    var set = new Set<number>()
    var count = 0
    for(var i of arr) {
        if(set.has(i-k)) count++
        if(set.has(i+k)) count++ 
        set.add(i)
    }
    return count
}

const ans  = pairs(2,[1,5,3]) 
console.log(ans);

// gets 3