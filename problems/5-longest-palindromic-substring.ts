// bruteforce

function longestPalindrome(s: string): string {
    var max = "";
    for(var i=0;i<s.length;i++) {
        for(var j=i;j<s.length;j++) {
            const newStr = s.slice(i,j)
            if(isPalindrome(newStr) && max.length < newStr.length) {
                max = newStr
            }
        }
    }
    return max
};

function isPalindrome(str : string) {
    return str === str.split('').reverse().join('')
}


const ans = longestPalindrome("abaabac")
console.log(ans);
