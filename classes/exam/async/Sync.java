package exam.async;

class Printer implements Runnable {
    synchronized public void run(){
        String name = Thread.currentThread().getName();
        System.out.println(name+ " started printing");
        for(int i=1; i<=3; i++){
            System.out.println(name+ " is printing");
            try {
                Thread.sleep(2000);
            }
            catch(Exception e){
                System.out.println("Some problrm Occured");
            }
        }
        System.out.println(name+ "completed printing");
    }
}

class Sync {
    public static void main(String args[]){
        Printer p = new Printer();
        Thread t1 = new Thread(p);
        Thread t2 = new Thread(p);
        Thread t3 = new Thread(p);
        t1.setName("MEN");
        t2.setName("WOMEN");
        t3.setName("CHILD");
        t1.start();
        t2.start();
        t3.start();
    }
}