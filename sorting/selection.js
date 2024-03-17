function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j=i;
    while(j>0 && arr[j-1] > arr[j]){
      let temp = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = temp
      j--;
    }
  }
  return arr;
}

console.log(selectionSort([5, 8, 3, 12, 7]));
