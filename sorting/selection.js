function selectinSort(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length ; j++) {
      if(arr[j] < arr[min]){
				min = j;
			}
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectinSort([15, 5, 81, 9,1616,12])); //to be [1,3,4,5]
