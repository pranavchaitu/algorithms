// optimal
function rotateString(s: string, goal: string): boolean {
    for(var i=0;i<s.length;i++) {
        let end = s.slice(i)
        let start = s.slice(0,i)
        if(end + start === goal) {
            return true
        } 
    }
    return false
}


// brute force
// function rotateString(s: string, goal: string): boolean {
//     if(s == goal) return true
//     let arr : string[] = s.split('')
//     let count = s.length
//     while(arr.length && count) {
//         count -= 1
//         const popped = arr.shift()
//         arr.push(popped!)
//         if(arr.join('') == goal) {
//             return true
//         }
//     }
//     return false
// };

const ans = rotateString('abcde',"abced")
console.log(ans);
