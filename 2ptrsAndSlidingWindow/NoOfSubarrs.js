//subarrays where sum == k

function noOfSubArr(arr,k){
    let l = 0;
    let r = 0;
    let count = 0;
    let sum = 0;
    while(r < arr.length){
        sum += arr[r]
        if(sum === k){
            count++
        }
        while(sum > k){
            sum -= arr[l];
            l++;
        }        
        r++;
    }
    return count;
}

console.log(noOfSubArr([10,5,11,4,11],15));