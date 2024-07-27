package org.portfolio.backend.zain.portfolio_backend.Controller;

import java.util.List;

import org.portfolio.backend.zain.portfolio_backend.Services.fbServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin("http://localhost:3000")
public class FeedbackController {
    @Autowired
    fbServices FbService;
    @GetMapping("/letsconnect")
    public List<Feedback> getAllFeedbacks() {
        return FbService.GetFeedback();
    }
    @PostMapping("/letsconnect")
    public String postFeedback(@RequestBody Feedback fb){
        return FbService.postFeedback(fb);
    }
}