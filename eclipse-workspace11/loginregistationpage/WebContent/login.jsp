<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
       <h1>Welcome to Login</h1>
<form action="LoginRegister" method="post">
<table>
<tr>
<td><h3>${message}</h3>
<h2>${Successmessage}</h2>
<h4>${message2}</h4>
<td></td>

<td></td>
</tr>
<tr><td>User_Id :</td><td><input type="email" name="uid" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="enter email id as UserId">
</td></tr>
<tr><td>Password :</td><td><input type="password" name="password1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters" required>
</td></tr>
<tr><td><input type="submit" name="submit" value="login"></td>
<td><a href="registation.jsp">New Registration</a></td>
<td><a href="forgetpassword.jsp">Forgot Password</a></td></tr>
</table>
</form>
</body>
</html>