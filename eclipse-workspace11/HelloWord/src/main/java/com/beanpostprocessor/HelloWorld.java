package com.beanpostprocessor;

public class HelloWorld {
private String message;
public void setMessage(String message) {
	this.message=message;
	
}
public String getMessage() {
	return message;
}
public void init()
{System.out.println("method is inti");

	}
public void destroy() {
	System.out.println("method is destroy");
}
}
