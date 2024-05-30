package exam.swing;

import javax.swing.*;

class Main {
    public static void main(String[] args) {
        // CB();
        TB();
    }
    static void CB() {
        JFrame f = new JFrame("the jframe");
        f.setSize(1000,1000);
        JPanel p = new JPanel();
        String[] arr = new String[]{"India", "China", "US","England", "Japan", "Russia"};
        JComboBox<String> country = new JComboBox<String>(arr);
        p.add(country);
        f.add(p);
        f.setVisible(true);
    }
    static void TB() {
        JFrame f = new JFrame("the jframe");
        f.setSize(1000,1000);
        JPanel p = new JPanel();
        JTextField t = new JTextField("pranav chaitu");
        p.add(t);
        f.add(p);
        f.setVisible(true);
    }
}