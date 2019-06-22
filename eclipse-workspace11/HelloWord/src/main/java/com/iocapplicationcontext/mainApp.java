package com.iocapplicationcontext;

import java.applet.AppletContext;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class mainApp {
public static void main(String args[]) {
	ApplicationContext context=new ClassPathXmlApplicationContext("");
}
	
}
