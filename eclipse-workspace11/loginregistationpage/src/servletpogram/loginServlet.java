package servletpogram;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import servletpogram.DBConnection;
//import javax.servlet.http.HttpSession;



/**
 * Servlet implementation class loginServlet
 */
@WebServlet("/loginServletl")
public class loginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public Connection con;
	@Override
    public void init()throws ServletException{
	   con=DBConnection.getConnection();
	}
	
	
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// get the data from database(model)
		//redirect to the difference page
		response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter pw=response.getWriter();
		response.setContentType("text/html");
		String emailId=request.getParameter("emailId");
		String password=request.getParameter("password");
		try {
			// get the data from data base(model)
			String query="select * from Registration where emailId=? and password=?";
			PreparedStatement ps= con.prepareStatement(query);
			ps.setString(1,emailId);
			ps.setString(2, password);
			ResultSet rs=ps.executeQuery();
			if(rs.next()) {
				HttpSession hs=request.getSession();
				System.out.println(" Wellcome"+rs.getString(1));
			RequestDispatcher rd=request.getRequestDispatcher("index.html");
			rd.forward(request, response);
			}else {
				System.out.println("entered email and password are invalid");
				RequestDispatcher rd=request.getRequestDispatcher("login.jsp");
				rd.include(request, response);
			}
			
		}catch(Exception e) {
			e.getSuppressed();
			
		}
	}}




	