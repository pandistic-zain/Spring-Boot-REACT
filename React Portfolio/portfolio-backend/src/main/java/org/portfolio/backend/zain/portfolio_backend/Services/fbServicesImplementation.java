package org.portfolio.backend.zain.portfolio_backend.Services;

import java.util.ArrayList;
import java.util.List;

import org.portfolio.backend.zain.portfolio_backend.Controller.Feedback;
import org.portfolio.backend.zain.portfolio_backend.DAO.Entity.FeedbackEntity;
import org.portfolio.backend.zain.portfolio_backend.DAO.Repository.FeedbackRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

public class fbServicesImplementation implements fbServices {
    @Autowired
    FeedbackRepository feedbackRepository;

    @Override
    public String postFeedback(Feedback feedback) {
        FeedbackEntity feedbackEntity = new FeedbackEntity();
        BeanUtils.copyProperties(feedback, feedbackEntity);
        feedbackRepository.save(feedbackEntity);
        return "Save Success";
    }

    @Override
    public List<Feedback> GetFeedback() {
        List<FeedbackEntity> feedbackentity = feedbackRepository.findAll();
        List<Feedback> feedback = new ArrayList<>();
        for (FeedbackEntity fbEntity : feedbackentity) {
            Feedback fb = new Feedback();
            BeanUtils.copyProperties(fbEntity, fb);
            feedback.add(fb);
        }
        return feedback;
    }
}
