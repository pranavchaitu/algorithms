function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    var popped : number
    for(var i=0;i<k;i++) {
        popped = a.pop()!;
        a.unshift(popped)
    }
    for(var j in queries) {
        queries[j] = a[queries[j]]
    }
    return queries
}

const ans = circularArrayRotation([1,2,3],2,[1,1,2])
console.log(ans);

