//brute-force
function countBalancedPermutations(num: string): number {
    if(num == "") return 0
    const arr : any = getPermutations(num)
    const set : any = new Set()
    let count = 0
    for(let i of arr) {
        if(set.has(i)) continue
        set.add(i)
        if(i.length == 0) {
            continue
        }
        count += isBalanced(i)
    }
    return count
};

console.log(countBalancedPermutations('112'));
console.log(countBalancedPermutations('123'));
console.log(countBalancedPermutations('12345'));

function isBalanced(num: string): number {
    let evenSum = 0
    let oddSum = 0
    for(var i=0;i<num.length;i++) {
        if(i%2) {
            oddSum += Number(num[i])
        } else {
            evenSum += Number(num[i])
        }
    }
    return evenSum == oddSum ? 1 : 0
};

function getPermutations(arr : string) : string[] | [[]]{  
    if (arr.length === 0) return [[]];
    const result : string[] = [];
  
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const permutations = getPermutations(remaining);
  
      for (let j = 0; j < permutations.length; j++) {
        result.push(current + permutations[j]);
      }
    }
  
    return result;
}