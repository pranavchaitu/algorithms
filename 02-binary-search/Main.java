import java.util.*;
public class Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int target1 = 7;
		int target2 = 99;
		int[] arr1 = {-88,1,2,3,7,12,17,99};
		int[] arr2 = {99,77,65,12,-12};
		System.out.println(binarySearch(arr1,target1));
		System.out.println(binarySearch(arr2,target2));
	}
	static int binarySearch(int[] arr,int target) {
		int l = 0;
		int r = arr.length - 1;
		while(l<=r){
			int mid = (l+r)/2;
			if(arr[mid] == target){
				return mid + 1;
			}
			if(arr[l] < arr[r]){
				if(arr[mid] < target){
					l = mid + 1;
				}else{
					r = mid - 1;
				}
			}else{
				if(arr[mid] > target){
					l = mid + 1;
				}else{
					r = mid - 1;
				}
			}
		}
		return -1;
	}
}
