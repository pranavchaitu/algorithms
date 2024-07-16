function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    var res1 = 0
    var res2 = 0
    for(var i of apples) {
        if((a + i >= s)  && (a + i <= t)) {
            res1 += 1
        }
    }
    for(var i of oranges) {
        if((b + i >= s)  && (b + i <= t)) {
            res2 += 1
        }
    }
    console.log(res1);
    console.log(res2);
}


countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])
