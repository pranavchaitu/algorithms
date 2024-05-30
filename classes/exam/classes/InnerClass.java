package exam.classes;
public class InnerClass {
    //we should create a class as static as it is depedent on outer class
    //to get rid of it we make it static / independent
    protected static class Test {
        int roll;
        Test(int roll){
            this.roll = roll;
        }
        @Override
        public String toString() {
            System.out.println(true);
            return "own tostring";
        }
    }
    public static void main(String[] args) {
        //inside a static method we must use a static class / methods only
        Test pranav = new Test(1);
        Test chaitu = new Test(2);
        System.out.println(pranav.roll + chaitu.roll);
    } 
}
