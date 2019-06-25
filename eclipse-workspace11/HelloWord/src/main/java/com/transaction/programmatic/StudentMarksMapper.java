package com.transaction.programmatic;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class StudentMarksMapper implements RowMapper<StudetMarks>{

	public StudetMarks mapRow(ResultSet rs, int rownum) throws SQLException {
		StudetMarks studentMarks=new StudetMarks();
		  studentMarks.setId(rs.getInt("id"));
	      studentMarks.setName(rs.getString("name"));
	      studentMarks.setAge(rs.getInt("age"));
	      studentMarks.setSid(rs.getInt("sid"));
	      studentMarks.setMarks(rs.getInt("marks"));
	      studentMarks.setYear(rs.getInt("year"));

	      return studentMarks;
	   }
	

}
