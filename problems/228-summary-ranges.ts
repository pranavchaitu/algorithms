function summaryRanges(nums: number[]): string[] {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums[0].toString()];

    const results : string[]= [];
    let start = 0;

    for (let i = 1; i < nums.length + 1; i++) {
        if (nums[i] - 1 === nums[i - 1]) continue;
        
        if (start + 1 === i) {
            results.push(nums[start].toString());
        } else {
            results.push(`${nums[start]}->${nums[i - 1]}`);
        }
        start = i;
    }
    return results;
};