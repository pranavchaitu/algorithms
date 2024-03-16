function bubbleSort(arr) {
	let temp;
	for(let i=arr.length-1;i>=1;i--){
		for(let j=0;j<=i-1;j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([15, 5, 81, 9,1616,12]));