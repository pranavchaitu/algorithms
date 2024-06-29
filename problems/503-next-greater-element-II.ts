// optimal
function nextGreaterElements(nums : number[]) : number[] {
    const n = nums.length;
    const nge = new Array(n).fill(-1)
    const stack : number[] = []
    for(var i=2*n-1;i>=0;i--) {
        const currentIndex = i % n
        while(stack && stack[stack.length-1] <= nums[currentIndex]) stack.pop()
        if(i < n && stack.length) {
            nge[currentIndex] = stack[stack.length-1]
        }
        stack.push(nums[currentIndex])
    }
    return nge
}

// brute-force
// function nextGreaterElements(nums: number[]): number[] {
//     const res = []
//     var val,j;
//     for(var i in nums) {
//         val = -1
//         j = 0
//         while(nums[i] !== nums[j]) {
//             j++
//         }
//         while(j < nums.length) {
//             if(nums[j] > nums[i]) {
//                 val = nums[j]
//                 break
//             }
//             j++
//         }
//         if(val == -1) {
//             for(var k=0;k<i;k++) {
//                 if(nums[k] > nums[i]) {
//                     val = nums[k]
//                     break
//                 }
//             }
//         }
//         res.push(val)
//     }
//     return res    
// };

