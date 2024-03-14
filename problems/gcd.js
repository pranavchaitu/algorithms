function gcd(a, b) {
  for (let i = Math.min(a, b); i >= 1 ; i--) {
    if (a % i === 0 && b % i === 0) {
			return i
		}
  }
}

const ans = gcd(4, 8);
console.log(ans);
