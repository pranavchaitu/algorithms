//optimal
function findComplement(num: number): number {
    let mask = ~0;
    while(mask & num) {
        mask = mask << 1
    }
    return ~(mask ^ num)
}

//brute force
// function findComplement(num: number): number {
//     let str = num.toString(2)
//     str = str.split('').map(i => {
//         if(i == '1') {
//             return 0
//         }
//         return 1
//     }).join('')
//     return (parseInt(str,2))
// };


//to be returning 2
const res = findComplement(5)
console.log(res);
