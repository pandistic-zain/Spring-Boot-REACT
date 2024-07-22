package org.pandistic.zain.em_project.Controller;

import java.util.List;
import org.pandistic.zain.em_project.ServiceLayer.EmployeeService;
// import org.pandistic.zain.em_project.ServiceLayer.EmployeeServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmController {
    // List<Employees> employees = new ArrayList<>();
    // EmployeeService empservice = new EmployeeServiceImplement();

    @Autowired // Dependency Injection
    EmployeeService empservice;
    @GetMapping("/employees")
    public List<Employees> getAllEmployees() {

        return empservice.GetEmployees();
    }

    @PostMapping("/employees")
    public String addEmployee(@RequestBody Employees emp) {
        // employees.add(emp);
        empservice.CreateEmployee(emp);
        return "Saved Successfully";
    }

    @DeleteMapping("/employees/{id}")
    public String DeleteEmployee(@PathVariable Long id) {
        if (empservice.DeleteEmployee(id)) {
            return "Deleted Success";
        }
        return "ID Not Found";
    }

}
