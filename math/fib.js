function fib(n) {
  if(n == 0){
    return 0
  }
  if(n==1){
    return 1
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
printFib(40)
const t2 = performance.now()

console.log(`it takes ${(t2-t1).toFixed(2)} ms`);