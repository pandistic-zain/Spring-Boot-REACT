package org.pandistic.zain.em_project.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmController {
    List<Employees> employees = new ArrayList<>();

    @GetMapping("employees")
    public List<Employees> getAllEmployees() {

        return employees;
    }
    @PostMapping
    public String addEmployee(@RequestBody Employees employee){
        employees.add(employee);
        return "Saved Successfully";
    
    }

}
