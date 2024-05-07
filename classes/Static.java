class Static {
    public static void main(String[] args) {
        Human pranav = new Human("pranav",11);
        Human chaitu = new Human("chaitu",12);       
        System.out.println(Human.population); 
        System.out.println(Human.population); 
        Static A = new Static();
        A.fun();
    }

    static class Human {
        int age;
        String name;
        static long population;
        Human(String name,int age) {
            this.name = name;
            this.age = age;
            Human.population += 1;
        }
    }

    void fun() {
        greet();
    }

    void greet() {
        System.out.println("welcome");
    }
}