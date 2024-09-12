// optimal
function longestPalindrome(s: string): string {
    let res = ""
    for(var i=0;i<s.length;i++) {
        // odd condition
        let l = i
        let r = i
        while(l >= 0 && r < s.length && s[l] == s[r]) {
            const str = s.slice(l,r+1)
            if(str.length > res.length) {
                res = str 
            }
            l -= 1
            r += 1
        }

        // even condition
        l = i
        r = i + 1
        while(l >= 0 && r < s.length && s[l] == s[r]) {
            const str = s.slice(l,r+1)
            if(str.length > res.length) {
                res = str
            }
            l -= 1
            r += 1
        }
    }
    return res
};

// bruteforce
// function longestPalindrome(s: string): string {
//     var max = "";
//     for(var i=0;i<s.length;i++) {
//         for(var j=i+1;j<s.length;j++) {
//             const newStr = s.slice(i,j+1)
//             if(isPalindrome(newStr) && max.length < newStr.length) {
//                 max = newStr
//             }
//         }
//     }
//     return max
// };

// function isPalindrome(str : string) {
//     return str === str.split('').reverse().join('')
// }


const ans = longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy")
console.log(ans);
