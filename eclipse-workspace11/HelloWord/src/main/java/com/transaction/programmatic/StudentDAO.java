package com.transaction.programmatic;

import java.util.List;

import javax.sql.DataSource;

public interface StudentDAO {
	/*
	 * this is the method to initialize dataresource i.e connection
	 */
	public void setDataSource(DataSource ds);
	/*
	 * this the method to create date recored
	 */
	public void create(String name,Integer age,Integer marks,Integer year);
	
	/*
	 * this is the method to list all the record in student and studeDAO class
	 */
	public List<StudetMarks> list();
}
