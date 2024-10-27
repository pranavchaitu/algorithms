//bruteforce-1
function lengthAfterTransformations(s: string, t: number): number {
    let arr : number[] = []
    for(var i of s) {
        arr.push(i.charCodeAt(0)-97)
    }
    let temp : number[];
    for(let i=0;i<t;i++) {
        temp = []
        for(var k of arr) {
            if(k == 25) {
                temp.push(0)
                temp.push(1)
            } else {
                temp.push(k+1)
            }
        }
        arr = temp
    }
    return arr.length
};

//bruteforce-1
// function lengthAfterTransformations(s: string, t: number): number {
//     let res : string = s
//     for(var i=0;i<t;i++) {
//         res = transform(res)
//     }
//     return res.length
// };

// function transform(s : string) : string {
//     let res = ""
//     let ascii : number
//     for(var i of s) {
//         if(i == "z") {
//             res += "ab"
//         } else {
//             ascii = i.charCodeAt(0);
//             res += String.fromCharCode(ascii+1)
//         }
//     }
//     return res
// }

console.log(lengthAfterTransformations('abcyy',2));
console.log(lengthAfterTransformations('azbk',1));
console.log(lengthAfterTransformations('jqktcurgdvlibczdsvnsg',7517));