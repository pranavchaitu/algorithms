package Java.async;

public class SIngleThread {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        t.setName("pranav");
        System.out.println(t.getName());
    }
}
