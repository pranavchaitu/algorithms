package Java.layouts;

import java.awt.Frame;
import java.awt.BorderLayout;
import java.awt.Button;

public class Border extends Frame{  
    public Border() {
        this.setVisible(true);
        this.setSize(300, 400);
        this.setTitle("User Defned Frame Using TextFields");
        BorderLayout bl = new BorderLayout(10, 20);
        this.setLayout(bl); 
        Button b1 = new Button("NORTH");
        Button b2 = new Button("SOUTH");
        Button b3 = new Button("EAST");
        Button b4 = new Button("WEST");
        this.add(b1,BorderLayout.NORTH);
        this.add(b2,BorderLayout.SOUTH);
        this.add(b3,BorderLayout.EAST);
        this.add(b4,BorderLayout.WEST);
    }
    public static void main(String args[]){
        Border b = new Border();
        System.out.println(b);
    }
}