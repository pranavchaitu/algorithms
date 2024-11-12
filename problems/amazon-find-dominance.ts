function findDominance(s: string[]): number[] {
    let res : number[] = []
    while(s[0] !== "") {
        res.unshift(dominant(s))
        s = s.map(i => i.slice(0,i.length-1))
    }
    return res
}

function dominant(arr : string[]) : number {
    const map = new Map()
    for(var i of arr) {
        map.set(i,map.get(i) + 1 || 1)
    }
    return Array.from(map.values()).sort((a,b) => b-a)[0]
}


const res = findDominance(['abb','aba','aba'])
console.log(res);
