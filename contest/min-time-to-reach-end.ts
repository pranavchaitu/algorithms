function minTimeToReach(moveTime: number[][]): number {
    let res = 0;
    let i=0;
    let j=0;
    while(i <= moveTime.length-1 || j <= moveTime.length-1) {
        if(moveTime[i+1][j] < moveTime[i][j+1]) {
            i += 1  
        } else {
            res += moveTime[i][j+1]
            j += 1
        }
        res += 1
    }
    
    return res
};

const ans = minTimeToReach([[0,4],[4,4]])
console.log(ans);
