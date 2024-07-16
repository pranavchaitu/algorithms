    function birthday(s: number[], d: number, m: number): number {
        let count = 0
        for(var i=0;i<=s.length-m;i++) {
            const sum = s.slice(i,i+m).reduce((a,b) => a+b)
            if(sum == d) count++
        }
        return count
    }

    //                    i j    
    const ans = birthday([4],4,1)
    console.log(ans);

