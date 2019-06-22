package com.springjdbc;

import java.sql.ResultSet;
import java.sql.SQLException;

public class StudentMapper implements RowMapper {
public Student rowMapp(ResultSet rs ,int rowNum) throws SQLException {
	Student stud=new Student();
	stud.setId(rs.getInt("id"));
	stud.setName(rs.getString("name"));
	stud.setAgs(rs.getInt("age"));
	      
	return stud;
	
}
}
