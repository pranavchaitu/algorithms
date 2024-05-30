package exam.methods;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        //pass by reference
        int[] arr = new int[]{1,2,4,3};
        System.out.println(Arrays.toString(arr));
        new Main().fun(arr);
        System.out.println(Arrays.toString(arr));
    }
    void fun(int[] arr) {
        arr[0] = 100;
    }
}
