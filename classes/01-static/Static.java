class Static {
    public static void main(String[] args) {
        Human pranav = new Human("pranav",11);
        Human chaitu = new Human("chaitu",12);     
        Human.population += 1;
        System.out.println(Human.population); 
        System.out.println(Human.population); 
        System.out.println(pranav);
        System.out.println(chaitu);
        // funn();
    }

    static class Human {
        int age;
        String name;
        static long population;
        // to use a non static variable/method we should make it static or create a instance , and use the value from that instance
        // void method() {
        //     System.out.println(true);
        //     Human obj = new Human("pranav", 1);
        //     System.out.println(obj.name);
        // }
        Human(String name,int age) {
            this.name = name;
            this.age = age;
            Human.population += 1;
        }
    }

    static void funn() {
        // creating a instance of this program
        Static obj = new Static();
        obj.fun();
    }

    void fun() {
        greet();
    }

    void greet() {
        System.out.println("welcome");
    }
}