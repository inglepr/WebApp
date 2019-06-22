package com.annotation;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages="com.annotation.Collage")
public class CollageCofig {
	@Bean(name="colBean")
public Collage CollageBean() {
	Collage col=new Collage(); 
	return col;
	
}
}
