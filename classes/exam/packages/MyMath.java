package exam.packages;

public class MyMath {
    public static void main(String[] args) {
        System.out.println(Math.sqrt(4));
        System.out.println(Math.cbrt(8));
        System.out.println(Math.sin(0));
        System.out.println(Math.sin(90));
        Integer i = new Integer(2);
        int j = i.intValue();
        int k = Integer.valueOf(j);
        System.out.println((i));
        System.out.println(j);
        System.out.println(k);
    }
}
