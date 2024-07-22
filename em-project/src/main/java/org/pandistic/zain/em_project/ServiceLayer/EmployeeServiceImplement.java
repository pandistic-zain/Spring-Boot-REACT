package org.pandistic.zain.em_project.ServiceLayer;

import java.util.ArrayList;
import java.util.List;

import org.pandistic.zain.em_project.Controller.Employees;

public class EmployeeServiceImplement implements EmployeeService {
    List<Employees> employees = new ArrayList<>();
    @Override
    public List<Employees> GetEmployees() {
        return employees;
    }
    @Override
    public String CreateEmployee(Employees emp) {
        employees.add(emp);
        return "Saved Sucessfully";
    }

    @Override
    public boolean DeleteEmployee(long id) {
        employees.removeIf(employee -> employee.getId() == id);
        return true;

    }

}
