function breakingRecords(scores: number[]): number[] {
    var min = scores[0]
    var max = scores[0]
    var res = [0,0]
    for(var i=1;i<scores.length;i++) {
        if(scores[i]  > max) {
            res[0] += 1
            max = scores[i]
        } else if(scores[i] < min) {
            res[1] += 1
            min = scores[i]
        }
    }
    return res
}