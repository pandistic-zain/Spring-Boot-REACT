package org.pandistic.zain.em_project.ServiceLayer;

import java.util.List;

import org.pandistic.zain.em_project.Controller.Employees;

public interface EmployeeService {
    Employees CreateEmployee(Employees emp);
    List<Employees> GetEmployees();
    boolean Deleteemployee(long id);
}
