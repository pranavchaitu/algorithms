package exam.interfaces;

public interface Printable {
    void print();
    public interface Showable {
        void show();
    }
    default void hi() {
        System.out.println("hii block");
    }
}
