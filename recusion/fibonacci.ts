// function to return fibonacci in recurisive way

function fib(n : number) : number {
    if(n <= 1) {
        return n
    }
    const res = fib(n-1) + fib(n-2)
    return res
}

for(var i=0;i<20;i++) {
    console.log(fib(i));
}