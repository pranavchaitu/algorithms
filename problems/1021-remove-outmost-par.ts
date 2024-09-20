function removeOuterParentheses(s: string): string {
    let res : string = ""
    const stack : string[] = []
    for(var i of s) {
        if(i === "(") {
            if(stack.length) res += i
            stack.push(i)
        } else {
            stack.pop()
            if(stack.length) res += i
        }
    }
    return res
};

const ans = removeOuterParentheses("(()())(())")
console.log(ans);
