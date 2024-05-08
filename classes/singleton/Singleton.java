package singleton;
public class Singleton {

    private static Singleton instance;

    String name;
    int age;

    private Singleton(String name,int age) {
        this.name = name; 
        this.age = age;
    }

    public static Singleton getInstance(String name,int age) {
        if(instance == null){
            instance = new Singleton(name,age);
        }
        return instance;
    }
}
