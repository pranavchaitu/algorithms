function migratoryBirds(arr: number[]): number {
    const map = new Map<number,number>()
    for(let i of arr) {
        map.set(i,(map.get(i) || 0) + 1)
    }
    var maxCount = 0;
    var maxBird = -1;
    for(const [bird,count] of map.entries()) {
        if(count > maxCount || (count === maxCount && bird < maxBird)) {
            maxBird = bird
            maxCount = count
        }
    }
    return maxBird
}

// migratoryBirds([1,1,2,2,3])
const ans = migratoryBirds([1,4,4,4,5,3,5,5])
console.log(ans);
