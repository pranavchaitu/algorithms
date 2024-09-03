function getLucky(s: string, k: number): number {
    var res = ""
    for(let i of s) {
        res += i.charCodeAt(0) - 96
    }
    let ans : number;
    var arr = res.split('')
    for(let i=0;i<k;i++) {
        ans = 0
        arr.forEach((i) => ans += parseInt(i))
        console.log(ans);  
        arr = String(ans).toString().split("")
    }
    return ans!
};

const ans = getLucky("abcd",2)
console.log(ans);
console.log(String(10).toString().split(''));
