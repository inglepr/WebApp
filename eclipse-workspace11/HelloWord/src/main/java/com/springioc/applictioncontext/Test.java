package com.springioc.applictioncontext;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
public static void main(String args[]) {
	ApplicationContext context = new ClassPathXmlApplicationContext("Beans6.xml");

	Student student=(Student)context.getBean("studentbean");
	student.displayInfo();}
}
