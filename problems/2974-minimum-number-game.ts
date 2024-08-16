function numberGame(nums: number[]): number[] {
    nums.sort((a,b) => b-a)
    const res : number[] = []
    while(nums.length) {
        const alice = nums.pop()    
        const bob = nums.pop()
        res.push(bob!)
        res.push(alice!)
    }
    return res
};