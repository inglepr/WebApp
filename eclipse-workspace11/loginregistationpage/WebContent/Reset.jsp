<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>reset Password</h1>
<form action="ResetServlet" method="post"></form>
<table>
<td>User_Id</td>
<td><input type="email" name="email" /></td>

<tr><td>new Password :</td><td><input type="password" name="password1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters" required>

</td></tr>
<tr><td>retype Password :</td><td><input type="password" name="password2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters" required>
</td></tr>

<tr><td><input type="submit" name="submit" value="Reset"></td><td></td></tr>

</table>
</body>
</html>