/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let fc1 = {};
    let fc2 = {};
    for(let i of nums1){
        fc1[i] = ++fc1[i] || 1
    }
    for(let i of nums2){
        fc2[i] = ++fc2[i] || 1
    }
    const res = [];
    let map = {}
    for(let i in fc1){
        if(!i in fc2){
            continue;
        }
        if(fc1[i] == fc2[i]){
            res.push(Number(i))
            continue
        }
        let count = Math.min(fc1[i],fc2[i]);
        for(let j=0;j<count;j++){
            if(!(i in map)){
                res.push(Number(i));
                map[i] = 1;
            }
        }
    }
    return res;
};


console.log(intersection([1,2,2,1],[2,2]));