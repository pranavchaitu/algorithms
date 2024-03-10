import java.util.*;
class Main {
	public static void main(String[] args) {
		System.out.print("Enter size : ");
		Scanner in = new Scanner(System.in);
		int size = in.nextInt();
		int[] arr = new int[size];
		for(int i=0;i<arr.length;i++){
			System.out.printf("Enter value at index %d : ",i);
			arr[i] = in.nextInt();
		}
		System.out.print("Enter a element to search : ");
		int target = in.nextInt();
		int ans = binarySearch(arr,target);
		if(ans == -1){
			System.out.print("element not found");
			return;
		}
		System.out.printf("%d is found at %d in O(log n) time",target,ans);
	}
	static int binarySearch(int[] arr,int target){
		int l = 0;
		int r = arr.length-1;
		int mid;
		while(l <= r){
			mid = (l + r)/2;
			if(target > arr[mid]){
				l = mid + 1;
			} else if(target < arr[mid]) {
				r = mid - 1;
			} else {
				return mid;
			}
		}
		return -1;
	}
}