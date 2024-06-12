package Java.JDBC;

import java.sql.*;

public class Main {
    public static void main(String args[]){
        Connection con = null;
        Statement stmt = null;
        String url = "jdbc:mysql://localhost:3306/employee";
        String un = "root";
        String pwd = "root";
        try {
            // Loading driver class
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver Successfully Loaded");
            // Establishing connection
            con = DriverManager.getConnection(url, un, pwd);
            System.out.println("Connection established");
            //Retrieve data
            stmt = con.createStatement();
            String query = "select * from emp";
            ResultSet res = stmt.executeQuery(query);
            System.out.println("Query executed"); 
            res.next();
            while(res.next() == true) {
                System.out.println(res.getInt("id") + " " +
                res.getString("name") + " " + res.getString("dsig") + " " + res.getInt("salary"));
            }
        }
        catch (ClassNotFoundException e) {
            System.out.println("Driver not loaded");
        }
        catch (SQLException e){
            e.printStackTrace();
        }
        finally {
            // Close Connection
            // stmt.close();
            // con.close();
        }
    }
}
