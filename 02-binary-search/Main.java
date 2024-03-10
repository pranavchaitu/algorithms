//binary search for a sorted array(ascending/descending

public class Main {
	public static void main(String[] args) {
		int[] arr1 = {1,3,4,5,6};
		int[] arr2 = {62,44,33,2,1};
		int target1 = 1;
		int target2 = 62;
		int ans = binarySearch(arr1,target1);
		int ans2 = binarySearch(arr2,target2);
		System.out.println(ans);
		System.out.println(ans2);
	}

	static int binarySearch(int[] arr,int target){
		int l = 0;
		int r = arr.length - 1;
		int mid;
		while(l < r){
			mid = (l + r) / 2;
			if(target == arr[mid]){
				return mid;
			} else if(arr[l] == target){
				return l;
			} else if(arr[r] == target){
				return r;
			} else if(arr[l] < arr[r]){
				if(target < arr[mid]){
					r = mid;
				} else{
						l = mid + 1;
				}		
			}else {
				if(target > arr[mid]){
					r = mid;
				} else{
						l = mid + 1;
				}		
			}		
		}
		return -1;
	}
}