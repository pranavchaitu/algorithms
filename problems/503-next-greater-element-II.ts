function nextGreaterElements(nums : number[]) : number[] {
    const stack = [-1]
    for(var i=nums.length-1;i>=0;i--) {
        if(stack[stack.length-1] < nums[i]) {
            while(stack[stack.length-1] < nums[i]) stack.pop()
        } else {
            nums[i] = stack[stack.length-1] || -1
        }
        stack.push(nums[i])
    }
    return nums
}

console.log(nextGreaterElements([1,2,3,4,3]));
