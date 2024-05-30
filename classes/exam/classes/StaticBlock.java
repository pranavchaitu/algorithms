package exam.classes;
public class StaticBlock {
    static int a = 10;
    static int b = 2;
    //only runs once irrespective of object creation
    static {
        b = 10;
        System.out.println("in static block");
    }

    public static void main(String[] args) {
        StaticBlock.b += 2;
        System.out.println(StaticBlock.a + " " + StaticBlock.b);
        System.out.println(StaticBlock.a + " " +StaticBlock.b);
    }
}