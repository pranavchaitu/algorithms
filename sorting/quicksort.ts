function quickSort(arr : number[], left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr : number[], left : number, right : number) {
    const pivot = arr[left];
    let i = left + 1; 
    for (let j = left + 1; j <= right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[left], arr[i - 1]] = [arr[i - 1], arr[left]]; 
    return i - 1;
}

// Test the function
const array = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted array:", quickSort(array));
