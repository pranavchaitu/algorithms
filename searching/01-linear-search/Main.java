import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] array = {8,2,3,4,5};
		int[][] array2 = {
			{1,2,3},
			{5,6},
			{7,8,9,55}
		};
		int target = 3;
		int ans = linearSearch(array, target);
		int ans2 = linearSearch2(array, target, 1, 3);
		int ans3 = findMin(array);
		System.out.println(Arrays.toString(searchIn2dArr(array2, target)));
		System.out.println(ans);
		System.out.println(ans2);
		System.out.println(ans3);
	}

	static int linearSearch(int[] arr, int target){
		if(arr.length == 0){
			return -1;
		}
		for(int i=0;i<arr.length;i++){
			if(arr[i] == target){
				return i;
			} 
		}
		return -1;
	}

	static int linearSearch2(int[] arr, int target,int start,int end){
		if(arr.length == 0){
			return -1;
		}
		for(int i=start;i<=end;i++){
			if(arr[i] == target){
				return i;
			} 
		}
		return -1;
	}

	static int findMin(int[] arr){
		int min = arr[0];
		for(int i=0;i<arr.length;i++){
			if(arr[i] < min){
				min = arr[i];
			} 
		}
		return min;
	}

	static int[] searchIn2dArr(int[][] arr, int target){
		if(arr.length == 0){
			return new int[]{-1,-1};
		}	
		for(int i=0;i<arr.length;i++){
			for(int j=0;j<arr[i].length;j++){
				if(arr[i][j] == target){
					return new int[]{i,j};
				}
			}
		}
		return new int[]{-1,-1};
	}
}
