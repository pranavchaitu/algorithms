// function findWords(words: string[]): string[] {
//     const res : string[] = []
//     let keys = ["eiopqrtuwy","adfghjkls","bcmnvxz"]
//     for(var i of words) {
//         for(var j of keys) {
//             if(j.includes(i[0])) {
//                 console.log(j,i);

//                 for(var k=1;k<i.length;k++) {
//                     if(!j.includes(i[k])) {
//                         continue
//                     }
//                 }
//                 res.push(i)  
//             }
//         }
//     }
//     return res
// };


function satisfies(str : string) {
    let keys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
    for(var i of str) {
        console.log(i)
    } 
}

const res = satisfies("alaska")
// const res = findWords(["Hello","Alaska","Dad","Peace"])
// const res = findWords(["adsdf","sfd"])

console.log(res);
