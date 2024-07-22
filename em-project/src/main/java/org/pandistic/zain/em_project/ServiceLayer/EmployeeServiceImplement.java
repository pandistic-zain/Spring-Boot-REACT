package org.pandistic.zain.em_project.ServiceLayer;

import java.util.ArrayList;
import java.util.List;

import org.pandistic.zain.em_project.Controller.Employees;
import org.pandistic.zain.em_project.Entity.EmployeeEntity;
import org.pandistic.zain.em_project.Repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImplement implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employees> GetEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employees> employees = new ArrayList<>();
        for (EmployeeEntity employeeEntity : employeeEntities) {
            Employees employee = new Employees();
            BeanUtils.copyProperties(employeeEntity, employee);
            employees.add(employee);
        }
        return employees;
    }

    @Override
    public String CreateEmployee(Employees emp) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(emp, employeeEntity);
        employeeRepository.save(employeeEntity);
        return "Saved Successfully";
    }

    @Override
    public boolean DeleteEmployee(long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public String UpdateEmployee(long id, Employees emp) {
        EmployeeEntity newEntity = employeeRepository.findById(id).get();
        newEntity.setEmail(emp.getEmail());
        newEntity.setName(emp.getName());
        newEntity.setPhone(emp.getPhone());
        newEntity.setId(id);
        employeeRepository.save(newEntity);
        return "Updated";
    }
}
