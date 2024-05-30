const reverse = (n) => {
	let num = Math.abs(n);
	let rev = 0;
	while(num !== 0){
		rev = rev*10 + num%10; 
		num = Math.floor(num/10);
	}
	return rev > Math.pow(2,31) - 1 ? 0 : n < 0 ? -rev : rev;
}

console.log(reverse(-134)); //should be -431
console.log(reverse(192983274));