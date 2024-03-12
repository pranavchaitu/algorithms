public class Eighty {
	public static void main(String[] args) {
		int[] arr = {1,1,2,2,2,3,3};
		int ans = removeDuplicates(arr);
		System.out.println(ans);
	}	
	static int removeDuplicates(int[] nums) {
		int l = 2;
		for(int r=2;r<nums.length;r++){
				if(nums[r] != nums[r-2]){
						nums[l] = nums[r];
						l++;
				}
		}
		return l;
	}
	//            l	
	// [1,1,2,2,3,3]
	//            r 
}


	

