const reverse = (n) => {
	let num = n;
	let rev = 0;
	while(num !== 0){
		rev = rev*10 + num%10; 
		num = Math.floor(num/10);
	}
	return rev > Math.pow(2,31) - 1 ? 0 : num < 0 ? -rev : rev;
}

console.log(reverse(134)); //should be 431