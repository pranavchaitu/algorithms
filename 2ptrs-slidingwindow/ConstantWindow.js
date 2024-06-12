function bestSum(arr, n){
    let l = 0;
    let r = n-1;
    let sum = 0 ; 
    while(l <= r){
        sum += arr[l];
        l++
    };
    l=0
    let bestSum = sum;
    while(r < arr.length - 1){
        sum = sum - arr[l]
        l++
        r++;
        sum = sum + arr[r]
        bestSum = Math.max(bestSum,sum)
    }
    return bestSum;
}

console.log(bestSum([-1,2,13,3,4,4,12],4));

