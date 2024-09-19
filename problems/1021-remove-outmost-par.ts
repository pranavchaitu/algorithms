function removeOuterParentheses(s: string): string {
    const stack = new Array(s.length)
    
    for(var i of s) {
        if(stack[stack.length-1] == )
        stack.push(i)
    }
    
    return ""
};

const ans = removeOuterParentheses("(()())(())")
console.log(ans);
