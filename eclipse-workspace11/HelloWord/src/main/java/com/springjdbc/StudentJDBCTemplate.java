package com.springjdbc;

import java.util.List;

import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;


public class StudentJDBCTemplate implements StudentDAO {
private DataSource sourse;
private JdbcTemplate jdbcTemplateObject;
	public void setDataSource(DataSource ds) {
	
		
	}

	public void create(String name, Integer age) {
		
	}

	public void getStudent(Integer id) {
		
	}

	public List<String> listStudents() {
		return null;
	}

	public void delete(Integer id) {
		
	}

	public void update(Integer id, Integer age) {
		
	}

}
