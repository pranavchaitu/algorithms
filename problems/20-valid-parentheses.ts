function isValid(s: string): boolean {
    const stack = new Array()
    for(var i of s){
        if(i == '(' || i == '[' || i == '{') {
            stack.push(i)
        } else {
            if(!stack.length) return false
            var top = stack.pop()
            if((top == '(' && i == ')') || (top == '[' && i == ']') || (top == '{' && i == '}')) continue
            return false
        }
    }
    return !stack.length
};


console.log(isValid("()[]{}"));
console.log(isValid("(}"));
console.log(isValid("(())"));
