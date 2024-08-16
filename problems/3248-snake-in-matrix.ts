function finalPositionOfSnake(n: number, commands: string[]): number {
    var i = 0,j = 0;
    var current = 0
    for(var k of commands) {
        if(k == "RIGHT") {
            j += 1
        } else if(k == "LEFT") {
            j -= 1            
        } else if(k == "UP") {
            i -= 1
        } else {
            i += 1
        }
        current = val(i,j,n)            
        console.log(current);
    }
    return current
};

function val(i : number,j : number,n : number) {
    return (i*n) + j
}

const res = finalPositionOfSnake(3,["DOWN","RIGHT","UP"])
console.log(res);