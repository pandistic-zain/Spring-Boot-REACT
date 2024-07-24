package org.pandistic.zain.em_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "org.pandistic.zain.em_project")
@EnableJpaRepositories
public class EmProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmProjectApplication.class, args);
    }
}
