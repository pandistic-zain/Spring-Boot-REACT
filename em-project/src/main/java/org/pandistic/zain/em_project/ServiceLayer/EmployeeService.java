package org.pandistic.zain.em_project.ServiceLayer;

import java.util.List;

import org.pandistic.zain.em_project.Controller.Employees;

public interface EmployeeService {
    String CreateEmployee(Employees emp);

    List<Employees> GetEmployees();

    boolean DeleteEmployee(long id);

    String UpdateEmployee(long id, Employees emp);
}
