package com.example.Lab4.controllers;

import com.example.Lab4.pojos.Employee;
import com.example.Lab4.services.IEmployeeService;
import com.example.Lab4.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostConstruct
    public void initData() {
        employeeRepository.createList();
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/paging")
    public Page<Employee> getEmployeesWithPaging(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return employeeService.getEmployeesWithPaging(pageable);
    }

    @GetMapping("/{empId}")
    public Employee getEmployeeById(@PathVariable String empId) {
        return employeeService.getEmployeeById(empId);
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.create(employee);
    }

    @DeleteMapping("/{empId}")
    public Employee deleteEmployee(@PathVariable String empId) {
        return employeeService.delete(empId);
    }
}
