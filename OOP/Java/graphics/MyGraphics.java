package Java.graphics;

import java.awt.Color;
import java.awt.Frame;
import java.awt.Graphics;
import java.awt.Label;
import java.awt.TextArea;
public class MyGraphics extends Frame{
    public MyGraphics(){
        TextArea t = new TextArea("Pranav");
        Label a = new Label("chaitu");
        this.add(a);
        this.add(t);
        this.setVisible(true);
        this.setSize(1000,1000);
        this.setTitle("User Defned Frame Using Graphics");
        this.setBackground(Color.GREEN);
    }
    public void paint(Graphics g){
        g.drawString("Welcome to Java Programming", 30, 40);
        g.drawRect(30, 40, 20, 40);
        g.drawOval(30, 40, 20, 40);
    }
    public static void main(String args[]){
        MyGraphics g = new MyGraphics();
        System.out.println(g);
    }
}
