function maxScore(nums: number[]): number {
    if(nums.length == 1) return nums[0] * nums[0]
    let max = factorScore(nums)
    let cal : number;
    for(var i=0;i<nums.length;i++) {
        cal = factorScore([...nums.slice(0,i),...nums.slice(i+1,nums.length)])
        if(cal > max) {
            max = cal 
        }
    }
    // nums.sort((a,b) => a-b);
    // nums.shift()
    return max 
};

console.log(maxScore([2,4,8,16]));
console.log(maxScore([1,2,3,4,5]));
console.log(maxScore([3]));
console.log(factorScore([6,14,20]));


function factorScore(arr : number[]) {
    // console.log(arr.reduce((a,b) => lcm(a,b),1));
    // console.log(arr.reduce((a,b) => gcd(a,b),arr[0]));
    return arr.reduce((a,b) => lcm(a,b),arr[0]) * arr.reduce((a,b) => gcd(a,b),arr[0])
}

function gcd(a : number, b : number) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
}

function lcm(a : number, b : number) {
    return (a * b) / gcd(a, b);
}

// console.log(factorScore([1,2,3,4,5]));
// console.log(factorScore([2,3,4,5]));


