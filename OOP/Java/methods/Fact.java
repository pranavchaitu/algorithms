package Java.methods;
public class Fact {
    static int fun(int i) {
        if(i == 1) return 1;
        return i*fun(i-1);
    }   
    public static void main(String[] args) {
        int ans = fun(4);
        System.out.println(ans);
    }
}
