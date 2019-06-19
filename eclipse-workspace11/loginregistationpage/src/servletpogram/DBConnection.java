package servletpogram;

import java.sql.Connection;
import java.sql.DriverManager;





public class DBConnection {
	private static Connection con;
	
	private DBConnection(){
		
	}
	
	static {
		try {
			//load and register class driver
			Class.forName("com.mysql.jdbc.Driver");
			//establish the connection between java application and database
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/bridgelab",
					"root","Admin@111");
			
		
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static Connection getConnection() {
			System.out.println("in getconnection");
		return con;
	}

}