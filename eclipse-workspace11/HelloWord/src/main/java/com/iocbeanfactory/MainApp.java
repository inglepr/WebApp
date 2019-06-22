package com.iocbeanfactory;

import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

public class MainApp {
public static void main(String args[]) {
	@SuppressWarnings("deprecation")
	XmlBeanFactory fact=new XmlBeanFactory(new ClassPathResource("beanfact.xml"));
	HelloWorld hell=(HelloWorld)fact.getBean("helloworld");
	hell.getMessage();
}
}
