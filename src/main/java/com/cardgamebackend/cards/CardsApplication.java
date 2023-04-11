package com.cardgamebackend.cards;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CardsApplication {

//	public static WebConfig webConfig = new WebConfig();
	public static void main(String[] args) {
		SpringApplication.run(CardsApplication.class, args);
//		webConfig.corsConfigurer();
	}
}
