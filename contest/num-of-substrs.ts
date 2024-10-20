//optimal
function numberOfSubstrings(s: string, k: number): number {
    let count = 0;
    const n = s.length;

    for (let start = 0; start < n; start++) {
        const freq: { [key: string]: number } = {};
        let totalChars = 0;

        for (let end = start; end < n; end++) {
            const char = s[end];
            freq[char] = (freq[char] || 0) + 1;

            // Check if the current character reaches k occurrences
            if (freq[char] === k) {
                totalChars++;
            }

            // Count the valid substrings that can be formed
            // All substrings from 'start' to 'end' are valid if at least one char has k occurrences
            if (totalChars > 0) {
                count += 1; // This counts the substring s[start:end]
            }
        }
    }

    return count;
}


//brute-force
// function numberOfSubstrings(s: string, k: number): number {
//     let strs = generateSubstr(s)
//     let count = 0
//     for(var i of strs) {
//         let map : any = {}
//         for(var j=0;j<i.length;j++) {
//             map[i[j]] = ++map[i[j]] || 1
//         }
//         let flag = false
//         for(var i in map) {
//             if(map[i] >= k) {
//                 flag = true
//             }
//         }
//         if(flag) count++
//         flag = false
//     }
//     return count
// };

// function generateSubstr(s : string) {
//     const res : string[] = []
//     for(var i=0;i<s.length;i++) {
//         for(var j=i;j<s.length;j++) {
//             res.push(s.slice(i,j+1))
//         }
//     }
//     return res
// }

const res = numberOfSubstrings('abcde',1)
console.log(res);
