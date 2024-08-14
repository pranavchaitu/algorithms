function convert(s: string, numRows: number): string {
    if(numRows == 1) return s 
    let res = ""
    let row = 0
    let step = (numRows-1)*2
    for(var k=0;k<numRows;k++) {
        for(let i=k;i<s.length;i+=step) {
            res += s[i]
            // if the row is middle and the extra one exists add it too
            if(k > 0 && k < numRows - 1 && (i + step - 2*k < s.length)) {
                res += s[i + step - 2*k]
            }
        }
    }
    return res
};