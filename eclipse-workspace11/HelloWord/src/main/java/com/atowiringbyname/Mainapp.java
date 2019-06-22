package com.atowiringbyname;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Mainapp {
public static void main(String args[]) {
	ApplicationContext context=new ClassPathXmlApplicationContext("BeanAto.xml");
	SpellChecker chek=(SpellChecker)context.getBean("textEditor");
	chek.CheckSpelling();
}
}
