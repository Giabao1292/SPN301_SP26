package com.example.Lab4.services;

import com.example.Lab4.pojos.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IEmployeeService {

    List<Employee> getAllEmployees();

    Employee getEmployeeById(String empId);

    Employee create(Employee employee);

    Employee delete(String empId);

    Page<Employee> getEmployeesWithPaging(Pageable pageable);
}
