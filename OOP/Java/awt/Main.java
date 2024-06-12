package Java.awt;

import java.awt.Frame;
import java.awt.Label;
import java.awt.TextField;

public class Main {
    public static class MyFrame extends Frame{
        public MyFrame() {
            Label l = new Label();
            TextField t = new TextField();
            l.setText("pranav chaitu");;
            t.setText("enter you number");
            this.add(l);
            this.add(t);
            this.setSize(200, 300);
            this.setVisible(true);
            this.setTitle("testing the gui");
        }
        public static void main(String[] args) {
            MyFrame f = new MyFrame();
            System.out.println(f);
        }
    }

    public void forEach(String str) {
        char[] word = str.toCharArray();
        for (char i : word) {
            System.out.println(i);
        }
    }
}