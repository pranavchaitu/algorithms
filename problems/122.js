/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let l = 0;
  let r = 1;
  while (r < prices.length) {
		let diff = prices[r] - prices[l];
    if (prices[l] < prices[r]) {
      profit += diff;
    }
		l=r;
    r++;
  }
  return profit;
};

const ans = maxProfit([7,1,5,3,6,4]);
console.log(ans);
