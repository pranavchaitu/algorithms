package singleton;

public class Test {
    public static void main(String[] args) {
        //only a single instance been created here
        Singleton obj1 = Singleton.getInstance("pranav", 18);    
        Singleton obj2 = Singleton.getInstance("chaitu", 19);    
        Singleton obj3 = Singleton.getInstance("sssss", 20);    
        System.out.println(obj1.name + " " + obj1.age);            
        System.out.println(obj2.name + " " + obj2.age);            
        System.out.println(obj3.name + " " + obj3.age);            
    }
}

