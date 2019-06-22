package com.annotationbyatowire;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
public static void main(String args[]) {
	ApplicationContext context=new ClassPathXmlApplicationContext("BeanAtowire.xml");
	SpellChecker chek=(SpellChecker)context.getBean("textEditor");
	chek.CheckSpelling();
}
}
