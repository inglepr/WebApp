package com.aop.xmlshemabase;

public class MyLoggingAspect {
/*
 * this is the method which i would like to execute before selected method
 */
	public void beforeAdvise()
	{
		System.out.println("give to the setup of student");
	}
	/*
	 * this is the method witch is execute before selected one
	 */
	public void afterAdvise() {
		System.out.println("student profile is setup");
		
	}
	/*
	 * this the method witch is execute after returning object
	 */
	public void afterReturningAdvise(Object retval) {
		System.out.println("returning is:"+retval.toString());
		
	}
	/*
	 * this is the advise witch give after throwing exception
	 */
	public <IlligaleArgumetException> void AfterThrowingAdvice(IlligaleArgumetException ex)
	{
		System.out.println("there has been execution:"+ex.toString());
	}
}
