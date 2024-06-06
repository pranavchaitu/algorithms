package exam.exceptions;

public class Types {
    public static void main(String[] args) {
        try {
            ExceptionRun e = new ExceptionRun();   
            e.fun();
        } catch (Exception e) {
            System.out.println("Object error");
        }
    }
}

//ducking exception and rethowing without the throw keyword

class ExceptionRun {
    void fun() throws ArithmeticException {
        int ans = 10/0;
        System.out.println(ans);
    }
}
