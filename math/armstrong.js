function armstrong(n) {
	let t1 = n;
	let t2 = n;
	let count = 0;
	while(t1 != 0){
		count++;
		t1 = parseInt(t1/10);
	}
	let rem;
	let sum = 0;
	while(t2 != 0){
		rem = parseInt(t2 % 10);
		sum += Math.pow(rem,count);
		t2 = parseInt(t2/10);
	}
	return sum == n;
}

console.log(armstrong(153));
console.log(armstrong(1634));
console.log(armstrong(1635));

