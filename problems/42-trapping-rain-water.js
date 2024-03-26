/**
 * @param {number[]} height
 * @return {number}
 */



const ans = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(ans);

// the O(n) memory and time complexity way

// var trap = function(height) {
//     let maxLeft = [];
//     let maxRight = [];
//     let minArr = [];
//     let max = 0;
//     for(let i in height){
//         maxLeft.push(max);
//         max = Math.max(max, height[i])
//     }
//     max = 0;
//     for(let i=height.length-1;i >= 0;i--){
//         maxRight.push(max);
//         max = Math.max(max, height[i]);
//     }
//     maxRight.reverse();
//     for(let i in maxLeft){
//         let value = Math.min(maxLeft[i],maxRight[i]);
//         minArr.push(value);
//     }
//     let water = 0;
//     for(let i in height){
//         let cal = minArr[i] - height[i];
//         if(cal > 0){
//             water += cal;
//         }  
//     }
//     return water;
// };
