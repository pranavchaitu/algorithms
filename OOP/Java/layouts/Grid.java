package Java.layouts;

import java.awt.Frame;
import java.awt.GridLayout;
import java.awt.Button;

public class Grid extends Frame{  
    public Grid() {
        this.setVisible(true);
        this.setSize(300, 400);
        this.setTitle("User Defned Frame Using TextFields");
        Button b1 = new Button("NORTH");
        Button b2 = new Button("SOUTH");
        Button b3 = new Button("EAST");
        Button b4 = new Button("WEST");
        this.add(b1);
        this.add(b2);
        this.add(b3);
        this.add(b4);
        this.setLayout(new GridLayout());
    }
    public static void main(String args[]){
        Grid g = new Grid();
        System.out.println(g);
    }
}   