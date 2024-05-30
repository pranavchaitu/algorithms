package exam.abstractclass;

abstract class A {
    abstract void saymyname();
    void saymynametoo() {
        System.out.println("you're goddamn right");
    } 
}

class B extends A {
    @Override
    void saymyname() {
        System.out.println("you're heisenberg");
    }
}

class Main {
    public static void main(String[] args) {
        B b = new B();
        b.saymyname();
        b.saymynametoo();
    }
}

