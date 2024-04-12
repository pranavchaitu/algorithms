function rountIt(n){
    let temp = n;
    while(n % 5 !== 0){
        n++
    }
    if(n - temp < 3 && n >= 40){
        return n;
    }
    return temp;
}

console.log(rountIt(73));
console.log(rountIt(67));
console.log(rountIt(38));
console.log(rountIt(33));