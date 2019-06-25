package com.aop.xmlshemabase;

public class Student {
private String name;
private Integer age;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Integer getAge() {
	return age;
}
public void setAge(Integer age) {
	this.age = age;
}
public void printThrowException() {
	System.out.println("Exception raised");
	 throw new IllegalArgumentException();
}

}
