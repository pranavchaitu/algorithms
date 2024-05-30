package exam.exceptions;

import java.util.Scanner;

public class CustomException extends Exception {
    @Override
    public String getMessage() {
        return "my custom exception - INVALID USER";
    }

    public static void main(String[] args) {
        int num = 1;
        Scanner in = new Scanner(System.in);
        while(num != 0) {
            System.out.print("enter code : ");
            num = in.nextInt();
            try {
                verify(num);
            } catch(Exception e){
                // System.out.println("oops");
                continue;
            }
        }
    }

    static void verify(int num) throws Exception {
        if(num != 123) {
            CustomException e = new CustomException();
            System.out.println(e.getMessage());
            throw e;
        } else {
            System.out.println("you're good to go - ENTER 0 TO EXIT");
        }
    }
}
