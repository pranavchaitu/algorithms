const isAlpha = (str) => {
	const regex = /^[a-zA-Z]+$/;
	return regex.test(str);
}

const isPalindrome = (s) => {
	const str = s.split('').filter(i => isAlpha(i)).join('').toLowerCase();
	let i = 0;
	let j = str.length - 1;
	while(i < j){
		if(str[i] != str[j]){
			return false;
		}
		i++;
		j--;
	}
	if(str.length == 1){
		return false;
	}
	return true;
}
