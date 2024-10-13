function findXSum(nums: number[], k: number, x: number): number[] {
    let i = 0;
    let j = k - 1;
    const res : number[] = []
    while(j < nums.length) {
        res.push(findMaxSum(nums.slice(i,j+1),x))
        i += 1
        j += 1
    }
    
    return res
};


function findMaxSum(arr : number[],x : number) : number {
    const map : Record<string,number> = {}
    for(var i of arr) {
        map[i] = ++map[i] || 1
    }
    arr.sort((a,b) => {
        if(map[a] == map[b]) {
            return b - a
        } 
        return map[b] - map[a]
    })

    var i = 0;
    let sum = 0;
    let j : number
    while(i < arr.length && x) {
        sum += arr[i]
        x -= 1
        j = i + 1
        while(j < arr.length && arr[i] === arr[j]) {
            sum += arr[j]
            j += 1
        }
        i = j
    }

    return sum;

    //can do it like this too
    // arr = Array.from(new Set(arr))
    
    // let sum = 0;
    // for (let i = 0; i < Math.min(x,arr.length); i++) {
    //     sum += arr[i] * map[arr[i]];
    // }

    // return sum;
}

const res = findXSum([1,1,2,2,3,4,2,3], 6, 2)
console.log(res);



