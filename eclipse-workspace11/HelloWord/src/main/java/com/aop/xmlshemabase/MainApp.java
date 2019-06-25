package com.aop.xmlshemabase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("BeanAOP.xml");
		Student obj=(Student)context.getBean("student");
obj.getAge();
obj.getName();
	}

}
