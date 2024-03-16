/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	for(let i=0;i<haystack.length - needle.length + 1;i++){
		console.log("i = " + i );
			if(haystack.slice(i,i + needle.length) === needle){
					return i;
			}
	}
	return -1;
};

const ans = strStr("mississippi","issip");
console.log(ans);
