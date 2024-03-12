// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

public class TwentySix {
	public static void main(String[] args) {
		int[] arr = {1,4,4,5,6,7,7,8};
		System.out.println(removeDuplicates(arr));
	}

	static int removeDuplicates(int[] nums){
    int l = 1;
    for(int r=1;r<nums.length;r++){
        if(nums[r] != nums[r-1]){
            nums[l] = nums[r];
            l++;
        }
    }
    return l;
	}
}
