// optimal
function reverseStr(s: string, k: number): string {
    const arr = s.split('')
    const len = s.length
    for(var i=0;i<len;i+=(2*k)) {
        const j = Math.min(i+k-1,len-1)
        reverse(arr,i,j)    
    }
    return arr.join('')
}  

function reverse(str : string[], i : number, j : number) {
    while(i < j) {
        const temp : string = str[i]
        str[i] = str[j]
        str[j] = temp
        i++
        j--
    }
}

// function reverseStr(s: string, k: number): string {
//     if(k >= s.length) {
//         return s.split('').reverse().join('')
//     }
//     var strArr = s.split('')
//     let i = 0
//     let j = k-1
//     let temp : string | null = null
//     while(j < s.length) {
//         const tempI = i
//         const tempJ = j
//         while(i < j) {
//             temp = strArr[i]
//             strArr[i] = strArr[j]
//             strArr[j] = temp
//             i += 1
//             j -= 1
//         }
//         i = tempI
//         j = tempJ
//         i += 2 * k
//         j += 2 * k
//     }
    
//     return strArr.join('')   
// };



const ans = reverseStr("abcdefg",2)
// abcdefg
// bacdfeg
console.log(ans);
