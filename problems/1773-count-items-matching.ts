let idx = {
    type : 0,
    color : 1,
    name : 2
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let res = 0;
    let index = idx[ruleKey]
    for(var item of items) {
        if(item[index] == ruleValue) res += 1
    }
    return res
};