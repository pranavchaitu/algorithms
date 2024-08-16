function permutationEquation(p: number[]): number[] {
    const map = new Map<number,number>()
    for(let i in p) {
        map.set(p[i],Number(i)+1)
    }
    const res : number[] = []
    for(let i=1;i<=p.length;i++) {
        const where = map.get(i)!
        res.push(map.get(where)!)
    }
    return res
}
    
const ans = permutationEquation([5,2,1,3,4])
console.log(ans);


// Counter([5,2,1,3,4])

function Counter(p : number[]) {
    const map = new Map<number,number>()
    for(var i in p) {
        if(!map.has(p[i])) {
            map.set(p[i],1)
        } else {
            const val = map.get(p[i])! 
            map.set(p[i],val+1)
        }
    }
    return map
}