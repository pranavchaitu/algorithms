function fib(n) {
  if(n == 0 || n == 1){
    return n
  }
  return fib(n-1) + fib(n-2)
}

function printFib(n) {
  const res = []
  for(var i=0;i<n;i++) {
    res.push(fib(i))
  }
  console.log(res.toString());
}

const t1 = performance.now()
printFib(50)
const t2 = performance.now()

console.log(`it takes ${(t2-t1).toFixed(2)} ms`);