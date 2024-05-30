package exam.exceptions;

public class Multi {
    public static void main(String[] args) {
        try {
            int ans = 10/0;
            System.out.println(ans);
        } catch(ArrayIndexOutOfBoundsException e){
            System.out.println("index out of bounds");
        } catch(ArithmeticException e) {
            System.out.println("ArithmeticException");
        } catch(NegativeArraySizeException e) {
            System.out.println("NegativeArraySizeException");
        } catch(Exception e) {
            e.getStackTrace();
            System.out.println("catch positive");
        } finally {
            System.out.println("finally positive");
        }
    }
}
