package com.awesoon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.awesoon")
@EntityScan(basePackages = "com.awesoon")
public class IlmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(IlmsApplication.class, args);
	}
}
