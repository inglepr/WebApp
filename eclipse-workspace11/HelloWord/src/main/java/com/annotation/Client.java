package com.annotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Client {
public static void main(String args[]) {
	ApplicationContext context=new ClassPathXmlApplicationContext("CollageCofig.class");
	Collage college=(Collage)context.getBean("colBean",Collage.class);
	System.out.println("collase objet is created by spring");
	college.test();
}
}
