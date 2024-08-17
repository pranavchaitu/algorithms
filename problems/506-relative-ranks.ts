function findRelativeRanks(score: number[]): string[] {
    let map = {}
    const temp = score.slice()
    score.sort((a,b) => b-a)
    if(score[0]) map[score[0]] = "Gold Medal"
    if(score[1]) map[score[1]] = "Silver Medal"
    if(score[2]) map[score[2]] = "Bronze Medal"
    for(var i=3;i<score.length;i++) {
        map[score[i]] = (i+1).toString()
    }
    const res : string[] = []
    for(var i of temp) {
        res.push(map[i])
    }
    return res
};

