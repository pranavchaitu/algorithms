function countingValleys(path: string): number {
    const stack : string[] = []
    var count = 0;
    for(var i of path) {
        if(i == "U" && stack[stack.length-1] == "D") {
            stack.pop()
            if(!stack.length) {
                count += 1
            }
        } else if(i == "D" && stack[stack.length-1] == "U") {
            stack.pop()
        } else {
            stack.push(i)
        }
    }
    return count
}


const res = countingValleys(`DDUUUUDD`) //TO RETURN 1
console.log(res);
