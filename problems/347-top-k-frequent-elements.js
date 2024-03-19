/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let fc = {};
  for (let i of nums) {
    fc[i] = ++fc[i] || 1;
  }
  const arr = sortObjectByValue(fc);
  return arr.slice(-k);
};

function sortObjectByValue(obj) {
  const entries = Object.entries(obj);
  entries.sort((a,b) => a[1] - b[1]);
  const sortedKeys = entries.map(([key]) => key);
  return sortedKeys;
}

const ans = topKFrequent([1,1,1,-1-1,3,3,3,3],2);
console.log(ans);