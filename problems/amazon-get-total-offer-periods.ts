//after
function getTotalOfferPeriods(sales: number[]): number {
    let count = 0;
    let arrs = getArrays(sales)
    while(arrs[0] && arrs[0].length) {
        count += checkItArr(arrs);        
        arrs.shift()
        arrs.forEach(arr => {
            arr.shift()
        })
    }
    return count
}

function getArrays(arr : number[]) {
    const res : number[][]= []
    for(var i=0;i<arr.length-2;i++) {
        for(var j=i+2;j<arr.length;j++) {
            res.push(arr.slice(i,j+1))
        }
        break
    }
    return res
}

function checkItArr(arrs : number[][]) {
    let count = 0
    arrs.forEach(i => checkIt(i) && count++)
    return count
}

function checkIt(arr : number[]) : number {
    let max = 0
    for(var i=1;i<arr.length-1;i++) {
        if(arr[i] > max) max = arr[i]
    }
    return Math.min(arr[0],arr[arr.length-1]) > max ? 1 : 0
}

//before
// function getTotalOfferPeriods(sales: number[]): number {
//     let count = 0;
//     for(var i=0;i<sales.length-2;i++) {
//         for(var j=i+2;j<sales.length;j++) {
//             count += checkIt(sales.slice(i,j+1))
//         }
//     }
//     return count
// }

// function checkIt(arr : number[]) : number {
//     let max = 0
//     for(var i=1;i<arr.length-1;i++) {
//         if(arr[i] > max) max = arr[i]
//     }
//     console.log(Math.min(arr[0],arr[arr.length-1]),max)
//     return Math.min(arr[0],arr[arr.length-1]) > max ? 1 : 0
// }

// const res = getTotalOfferPeriods([3,2,8,6])
// const res = getTotalOfferPeriods([5,2,1,3,6])
const res = getTotalOfferPeriods([10,6,8,5,11,9])
console.log(res);
