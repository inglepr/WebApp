package com.eventhandling;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
public static void main (String args[]) {
	ConfigurableApplicationContext context= new ClassPathXmlApplicationContext("Beancofig.xml");
	context.start();
	HelloWorld obj=(HelloWorld)context.getBean("hellobean");
	obj.getMessge();
	
}
}
