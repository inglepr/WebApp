package servletpogram;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/registrationServlet")
public class RegistrationServlet extends HttpServlet{
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
public Connection connection;
public Registration register;
       
    
	@Override
    public void init()throws ServletException{
	   connection=DBConnection.getConnection();
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw=response.getWriter();
		response.setContentType("text/html");
		String FirstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String address = request.getParameter("address");
//		int phoneNo = Integer.parseInt(request.getParameter("phoneNo"));
		String emailId = request.getParameter("emailId");
		String phoneNo=request.getParameter("phoneNo");
	   String password = request.getParameter("password");
		try {
			String query="insert into logReg values(?,?,?,?,?,?)";
			// execute para query
			PreparedStatement ps=connection.prepareStatement(query);
			 
			 ps.setString(1, FirstName);
			 ps.setString(2, lastName);
			 ps.setString(4, phoneNo);
			 ps.setString(3, address);
               ps.setString(5, emailId);
			 ps.setString(6, password);
			  int k=ps.executeUpdate();
			  if(k>0) {
				  System.out.println("successfuly inserted");// execute it on test database
				  RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
				   rd.forward(request, response);
			  }
			  ps.close();
			  
				
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		
	}

}


