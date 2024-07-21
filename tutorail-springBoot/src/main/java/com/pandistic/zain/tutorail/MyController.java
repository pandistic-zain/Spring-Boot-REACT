package com.pandistic.zain.tutorail;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @RequestMapping("zain")
    public String zain() {
        return "<h1>Hello Zain<h1/>";
    }

}
