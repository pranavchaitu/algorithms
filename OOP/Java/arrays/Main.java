package Java.arrays;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr1 = new int[]{1,2,3,5,3};
        int[] arr3 = new int[5];
        arr3 = Arrays.copyOf(arr1, 10);
        int ans = Arrays.binarySearch(arr1,3);
        System.out.println(ans);
        System.out.println(Arrays.equals(arr1, arr3));
        int [][] arr2 = new int[][] {{1,2,3},{3,2,1}};
        for(int i : arr3) {
            System.out.println(i);
        }
        System.out.println("--------------------------------------");
        arr1 = new int[10];
        for(int i : arr1) {
            System.out.println(i);
        }
        String str = Arrays.deepToString(arr2);
        System.out.println(str);
    }
}
