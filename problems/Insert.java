// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

//leetcode 35

public class Insert {
	public static void main(String[] args) {
		int arr1[] = {1,2,33,66};
		int target = 3;
		int ans = binarySearch(arr1,target);
		System.out.println(ans);
	}
	static int binarySearch(int[] nums,int target){
		int l = 0;
		int r = nums.length;
		while(l < r){
			int mid = (l + r) / 2;
			if(nums[mid] == target){
				return mid - 1;
			}else if(target < nums[mid]){
				r = mid;
			}else{
				l = mid + 1;
			}
		}
		return l ;
	} 
}
