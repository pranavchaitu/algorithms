//brute-force
function minBitwiseArray(nums: number[]): number[] {
    const ans : number[ ]= []
    for(var i of nums) {
        ans.push(findMatch(i))
    }
    return ans
};

function findMatch(num : number) {
    for (let i = 0; i <= num; i++) {
        if ((i | (i + 1)) === num) {
            return i;
        }
    }
    return -1;
}

const res = minBitwiseArray([2,3,5,7])
console.log(res);
