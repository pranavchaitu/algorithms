function pickingNumbers(a: number[]): number {
    let map = new Map()
    for(var i of a) {
        if(map.has(i)) {
            map.set(i,map.get(i)+1)
        } else {
            map.set(i,1)
        } 
    }
    var max = 0;
    for(const [key,value] of map) {
        const next = map.get(key+1) ?? 0
        max = Math.max(max,next+value)
    }
    return max
}
//              i     j
//              6 5 4 3 3 1
const ans = pickingNumbers([4,6,5,3,3,1]) //should return 3 {3,3,4}
console.log(ans);
