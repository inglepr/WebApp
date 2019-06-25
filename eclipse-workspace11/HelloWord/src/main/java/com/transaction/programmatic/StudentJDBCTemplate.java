package com.transaction.programmatic;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

public class StudentJDBCTemplate implements StudentDAO{
private DataSource datasource;
TransactionStatus status = null;

private JdbcTemplate JdbcTempletObject;
private PlatformTransactionManager tarangectionmaganer;
	public void setDataSource(DataSource ds) {
	this.datasource=datasource;
	this.JdbcTempletObject= new JdbcTemplate(ds);
		
	}
	public void setTransactionManager( PlatformTransactionManager tarangectionmaganer ) {
		this.tarangectionmaganer=tarangectionmaganer;
	}

	public void create(String name, Integer age, Integer marks, Integer year) {
	      TransactionDefinition def = new DefaultTransactionDefinition();
	
	try {
		String  sql1="insert into Student(name,age)valuse(?,?)";
		JdbcTempletObject.update(sql1, name, age);
        // Get the latest student id to be used in Marks table
String sql2="select Max(id) from Student";
int sid=JdbcTempletObject.queryForInt(sql2);
String Sql3 = "insert into Marks(sid, marks, year) " + "values (?, ?, ?)";
JdbcTempletObject.update(Sql3, sid, marks, year);
System.out.println("create name is"+name+"age is:"+age);
tarangectionmaganer.commit(status);

	}catch(DataAccessException ex) {
		ex.printStackTrace();
		tarangectionmaganer.rollback(status);
		
	}}

	public List<StudetMarks> list() {
		return null;
	}

}
