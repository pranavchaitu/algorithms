function constructRectangle(area: number): number[] {
    const len : number[] = [];
    for(var i=area;i>0;i--) {
        if(area % i == 0) {
            len.push(i);
        }
    }
    let j : number
    for(var i=len.length-1;i>=0;i--) {
        j = area/ len[i];
        if(len[i] >= j) {
            return [len[i],j];
        }
    }
    return [-1,-1];
};