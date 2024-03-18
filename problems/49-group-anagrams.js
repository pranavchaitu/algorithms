/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const s of strs) {
    const charCount = new Array(26).fill(0);
    for (const c of s) {
      charCount[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = JSON.stringify(charCount); // Use JSON for hashable key

    if (map.has(key)) {
      map.get(key).push(s);
    } else {
      map.set(key, [s]);
    }
  }

  return Array.from(map.values());
};


const ans = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(ans);