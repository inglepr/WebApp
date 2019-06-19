package servletpogram;



import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/ResetServlet")
public class ResetServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ResetServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("I am in doget of reset servlet");

		// get data
		String pwd = request.getParameter("password1");
		String pwd1 = request.getParameter("password2");
		String eid = request.getParameter("email");
		System.out.println("pwd >> " + pwd);
		System.out.println("pwd1 >> " + pwd1);
		System.out.println("eid >> " + eid);

		// set data
		request.setAttribute("pwdNext", pwd);
		request.setAttribute("pwd1Next", pwd1);
		request.setAttribute("eidNext", eid);

		// connection
		Connection conn = null;
		PreparedStatement statement = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			System.out.println("After class");
			conn = MyConnectionProvider.getCon();
			System.out.println("After connection");

			statement = conn.prepareStatement("update LogReg set Password =? , conform_Password = ? where Email =?");
			statement.setString(1, pwd);
			statement.setString(2, pwd1);
			statement.setString(3, eid);
			int result = statement.executeUpdate();
			if (result != 0) {
				System.out.println("Inside if");
				RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
				dispatcher.forward(request, response);
			} else {
				System.out.println("Inside else");

				RequestDispatcher dispatcher = request.getRequestDispatcher("welcome.jsp");
				dispatcher.forward(request, response);
			}

		} catch (Exception e) {

			e.printStackTrace();
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}