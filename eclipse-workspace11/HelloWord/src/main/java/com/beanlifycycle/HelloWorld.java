package com.beanlifycycle;

public class HelloWorld {
	@SuppressWarnings("unused")
	private String message;

	public void getMessage() {
		System.out.println("message is here");
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public void init()
	{
		System.out.println("bean gets initialized");
	}
	
	public void destroy()
	{
		System.out.println("bean will destroy now");
	}
}
