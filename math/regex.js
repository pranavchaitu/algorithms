const isAlpha = (str) => {
	const regex = /^[a-zA-Z0-9]+$/;
	return regex.test(str);
}

const isPalindrome = (s) => {
	const str = s.toLowerCase().split('').filter(i => isAlpha(i));
	let i = 0;
	let j = str.length - 1;
	while(i < j){
		if(str[i] != str[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}

console.log(isPalindrome("prnav   Vanr,p")) //to be true