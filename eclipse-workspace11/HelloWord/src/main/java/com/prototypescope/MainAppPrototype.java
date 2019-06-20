package com.prototypescope;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainAppPrototype {
public static void main(String args[]) {
	ApplicationContext context=new ClassPathXmlApplicationContext("BeanPrototype.xml");
	HelloWorld obj=(HelloWorld) context.getBean("helloWorld");
	obj.setMessage("iam first object");
obj.getMessage();
HelloWorld obj1=(HelloWorld)context.getBean("helloWorld");
obj1.setMessage("second object");
obj1.getMessage();
}
}
