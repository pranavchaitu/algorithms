function nCr(n : number,r : number) : number {
    var res : number = 1  
    for(var i=0;i<r;i++){
        res *= (n-i)
        // its like n-- && i++ which we're alfready doing
        res /= (i+1)
    }
    return res
}

function pascal(r : number, c : number) : number {
    return nCr(r-1,c-1)
}

//brute force row 
// function pascalRow(r : number) : number[] {
//     const res : number[] = []
//     var value : number 
//     for(var i=1;i<=r;i++) {
//         value = pascal(r,i)
//         res.push(value)
//     }
//     return res
// }

// optimal row getting

function pascalRow(n : number) : number[] {
    var ans = 1
    var res = [ans]
    for(var i=1;i<n;i++) {
        ans *= (n - i) / i
        res.push(ans)
    }
    return res
}

function pascalTriangle(n : number ) : number[][] {
    const res : number[][] = []
    for(var i=1;i<=n;i++) {
        res.push(pascalRow(i))
    }
    return res
}

console.log(pascalTriangle(4));
// console.log(pascalRow(4));
// console.log(nCr(4,1)); //for pascal(5,2)
// console.log(pascal(5,2));

