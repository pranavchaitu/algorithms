function addBinary(a: string, b: string): string {
    let res : number[] = []
    let i = a.length - 1
    let j = b.length - 1
    var carry = 0;
    while(true) {
        if(!a[i] && !b[j]) {
            carry && res.unshift(1)
            return res.reverse().join('')
        } else if(!a[i] || !b[j]) {
            res.unshift(parseInt(a[i] ? a[i] : b[i]))
            return res.reverse().join('')
        }
        if(a[i] == '0' && b[j] == '1') {
            console.log("first");
            carry ? res.unshift(1 + carry) && carry-- : res.unshift(1)
        } else if(a[i] == '0' && b[j] == '0') {
            console.log("second");

            carry ? res.unshift(0 + carry) && carry-- : res.unshift(0)
        } else {
            console.log("third");

            carry ? res.unshift(0 + carry) && carry-- : res.unshift(0)
            carry += 1
        }
        console.log(res ,carry);
        console.log(i,j);
        
        j -= 1
        i -= 1
    }
};

const res = addBinary("11","1")
console.log(res);
