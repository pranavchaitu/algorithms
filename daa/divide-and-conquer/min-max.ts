interface minMaxProps {
    min : number;
    max : number;
}

function minMax(arr : number[], left = 0, right = arr.length-1) : minMaxProps | undefined{
    if(left == right) {
        return {
            min : arr[left],
            max : arr[left]
        }
    }   

    if(left + 1 == right) {
        if(arr[left] < arr[right]) {
            return {
                min : arr[left],
                max : arr[right]
            }
        } else {
            return {
                min : arr[right],
                max : arr[left]
            }
        }
    }
    let mid = Math.floor((left + right)/2)  
    let leftSideRes = minMax(arr,left,mid)
    let rightSideRes = minMax(arr,mid+1,right)

    const min = Math.min(leftSideRes!.min,rightSideRes!.min)
    const max = Math.max(leftSideRes!.max,rightSideRes!.max)
    return { min,max }
}

const arr = [3, 5, 1, 8, 7, 2, 9];
const result : minMaxProps = minMax(arr)!;
console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);