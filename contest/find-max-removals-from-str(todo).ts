function maxRemovals(source: string, pattern: string, targetIndices: number[]): number {
    let count = 0;
    let current;
    while(targetIndices.length) {
        current = targetIndices.shift()
        const newStr = source.replace(source[current]!,"*")
        if(!newStr.replace('*','').includes(pattern)) {
            continue;
        }
        source = newStr
        count += 1
    }
    return count
};

let a = maxRemovals('abbaa','aba',[0,1,2])
console.log(a);
