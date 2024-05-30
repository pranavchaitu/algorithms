import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // System.out.println(args[0]);
        // System.out.println(args[1]);
        boolean flag = true;
        while(flag) {
            Scanner in = new Scanner(System.in);
            System.out.print("Enter a number : ");
            int num = in.nextInt();
            switch (num) {
                case 33:
                    System.out.println("youre great");
                    flag = false;
                    break;
                default:
                    System.out.println("try again");
                    break;
            }
        }
    }
}
