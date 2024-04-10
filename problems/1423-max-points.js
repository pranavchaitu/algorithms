/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let lsum = 0;
    for(let i=0;i<k;i++){
        lsum += cardPoints[i]
    }
    let rsum = 0;
    let maxSum = lsum;
    let r = cardPoints.length - 1;
    for(let i=k-1;i>=0;i--){
        lsum -= cardPoints[i];
        rsum += cardPoints[r];
        r--;
        maxSum = Math.max(maxSum,lsum + rsum)
    }
    return maxSum
};

console.log(maxScore([1,2,3,4,5,6,1],4)) //to be 13