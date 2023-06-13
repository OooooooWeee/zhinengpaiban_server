package com.example.zhinengpaiban;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableJpaRepositories(basePackages = {"com.example.zhinengpaiban.repository"})
//@EntityScan({"com.example.zhinengpaiban.entity"})
public class ZhinengpaibanApplication {

    public static void main(String[] args) {
        SpringApplication.run(ZhinengpaibanApplication.class, args);
    }

}
