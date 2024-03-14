/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      max = Math.max(max, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }
  return max;
};

let ans = maxProfit([7, 6, 4, 2, 1, 8]);
console.log(ans);
