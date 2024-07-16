function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if(v1 == v2) {
        return x1 == x2 ? "YES" : "NO"
    } 
    var timeWhichTheyCollide = (x2 - x1) / (v1 - v2)
    return timeWhichTheyCollide >= 0 && Number.isInteger(timeWhichTheyCollide) ? "YES" : "NO"
}

const ans = kangaroo(0,3,5,3) //no
const ans2 = kangaroo(0,3,4,2) //yes
console.log(ans);
console.log(ans2);

