// using helper method

function collectOddValues(arr : number[])  : number[] {
    const res : number[] = []
    function helper(arr : number[]) {
        if(!arr.length) {
            return;
        }
        if(arr[0] % 2) {
            res.push(arr[0])    
        }
        helper(arr.slice(1))
    }
    helper(arr)
    return res
}

// using pure recursion
function collectOddValuesPure(arr : number[]) : number[] {
    var res : number[] = []
    // base case
    if(!arr.length) return []
    if(arr[0] % 2) {
        res.push(arr[0])
    }
    res = res.concat(collectOddValuesPure(arr.slice(1)))
    return res
}

const res = collectOddValuesPure([1,2,3,4,5])
console.log(res);
