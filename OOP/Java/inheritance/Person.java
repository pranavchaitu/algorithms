package Java.inheritance;
public class Person extends Object{
    int age;
    String gender;
    Person() {
        this.age = -1;
        this.gender = "male";
    }
    Person(int age,String gender){
        this.age = age;
        this.gender = gender;
    }
    Person(Person other) {
        this.age = other.age;
        this.gender = other.gender;
    }
}
