<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Welcome to Registration</h1>

<form action="LoginRegister" method="post">
<table>
<tr>
<td><h2>${Successmessage}</h2></td>
</tr>
<tr><td>User_Id :</td><td><input type="text" name="uid" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="enter email id as UserId"></td></tr>
<tr><td>First_Name :</td><td><input type="text" name="fname" ></td></tr>
<tr><td>Last_Name :</td><td><input type="text" name="lname"></td></tr>
<tr><td>Email :</td><td><input type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></td></tr>
<tr><td>Password :</td><td><input type="password" name="password1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters" required>

</td></tr>
<tr><td>Conform_Password :</td><td><input type="password" name="password2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters" required>
</td></tr>

<tr><td><input type="submit" name="submit" value="Register"></td><td></td></tr>
</table>
</form>
</body>
</html>