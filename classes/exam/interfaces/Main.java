package exam.interfaces;

class Main implements Printable.Showable,Printable{
    @Override
    public void show() {
        System.out.println("heyy from show");
    }
    @Override
    public void print() {
        System.out.println("hello from print");
    }
    @Override
    public void hi() {
        System.out.println("hi block but here");
    }
    public static void main(String[] args) {
        Main m = new Main();
        m.print();
        m.show();
    }
}