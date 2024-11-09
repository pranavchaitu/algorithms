function maxFrequency(nums: number[], k: number, numOperations: number): number {
    let res = 0;
    let map = new Map();
    nums.forEach(i => {
        map.set(i, map.get(i) + 1 || 1)
    })
    console.log(map);
    return 1
};

maxFrequency([1,4,5,5], 1, 2)