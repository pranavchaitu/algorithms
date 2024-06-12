package Java.inheritance;
/**
 * Main
 */

public class Main {
    static class Student extends Person {
        int grade;
        Student() {
            this.age = 18;
            this.gender = "male";
            this.grade = 12;
        }
        Student(int age,String gender,int grade) {
            super(age, gender);
            this.grade = grade;
        }
    }
    public static void main(String[] args) {
        Student pranav = new Student();
        Person surya = new Student(17,"female",3);
        //throws a error cause grade is not of Person type
        // System.out.println(surya.grade);
        System.out.println(surya.age);
        System.out.println(surya.gender);
        System.out.println(pranav.age);
    }
    void fun1(String i) {
        System.out.println(true);
    }
    void fun1(int i){
        System.out.println(true);
    }
}