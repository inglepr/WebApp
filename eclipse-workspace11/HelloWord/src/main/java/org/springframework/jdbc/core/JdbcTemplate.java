package org.springframework.jdbc.core;

import java.util.List;

import javax.sql.DataSource;

import com.tansection.programmatic.StudentMarks;
import com.tansection.programmatic.StudentMarksMapper;

public class JdbcTemplate {

	public JdbcTemplate(DataSource dataSource) {
	}

		
	public int queryForInt(String sQL2) {
		// TODO Auto-generated method stub
		return 0;
	}
	public void update(String sQL3, int sid, Integer marks, Integer year) {
		// TODO Auto-generated method stub
		
	}
	public List<StudentMarks> query(String sQL, StudentMarksMapper studentMarksMapper) {
		// TODO Auto-generated method stub
		return null;
	}


	public void update(String sQL1, String name, Integer age) {
		// TODO Auto-generated method stub
		
	}

}
