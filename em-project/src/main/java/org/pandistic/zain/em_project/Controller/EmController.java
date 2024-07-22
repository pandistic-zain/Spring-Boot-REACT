package org.pandistic.zain.em_project.Controller;

import java.util.ArrayList;
import java.util.List;

import org.pandistic.zain.em_project.ServiceLayer.EmployeeService;
import org.pandistic.zain.em_project.ServiceLayer.EmployeeServiceImplement;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
public class EmController {
    // List<Employees> employees = new ArrayList<>();
    EmployeeService empservice = new EmployeeServiceImplement() {
        
    };

    @GetMapping
    public List<Employees> getAllEmployees() {

        return empservice.GetEmployees();
    }

    @PostMapping
    public String addEmployee(@RequestBody Employees emp) {
        // employees.add(emp);
        empservice.CreateEmployee(emp);
        return "Saved Successfully";
    }

}
