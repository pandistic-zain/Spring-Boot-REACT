package org.portfolio.backend.zain.portfolio_backend.Services;

import java.util.List;

import org.portfolio.backend.zain.portfolio_backend.Controller.Feedback;

public class fbServicesImplementation implements fbServices{
    @Override
    public String postFeedback(Feedback feedback){
        return "null";
    }
    @Override
    public List<Feedback> GetFeedback() {
        throw new UnsupportedOperationException("Unimplemented method 'GetFeedback'");
    }
}
