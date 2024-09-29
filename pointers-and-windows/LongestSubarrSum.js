//window sum should be less the k

function maxWindow(arr,k){
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let sum = 0;
    let left = l;
    let right = r;
    while(r < arr.length){
        sum += arr[r];
        while(sum > k){
            sum -= arr[l];
            l++;
        }
        if(sum <= k){
            if(r-l+1 > maxLen){
                maxLen = r-l+1;
                left = l;
                right = r;
            }
        }
        r++;
    }
    return arr.slice(left,right+1);
}

console.log(maxWindow([1,5,1,1,1],5));