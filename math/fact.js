function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(4)); //to be 24


//non recursive way
function fact2(n) {
	let fact = 1;
	while(n > 0){
			fact *= n;
			n--;
	}
	return fact;
}

console.log(fact2(4));