function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let res = 0
    let empty = 0
    while(numBottles || empty >= numExchange) {
        if(empty >= numExchange) {
            empty -= numExchange
            numExchange += 1
            numBottles += 1 
        } else {
            empty += numBottles
            res += numBottles
            numBottles = 0
        }
    }
    return res
};