function findTheDifference(s: string, t: string): string {
    let fc = {}
    for(var i of s) {
        fc[i] = ++fc[i] || 1
    }
    for(var i of t) {
        if(fc[i]) {
            fc[i] -= 1
        } else {
            return i
        }
    }
    return t
};
