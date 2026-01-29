package com.example.Lab4.services;

import com.example.Lab4.pojos.Employee;
import com.example.Lab4.repositories.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private IEmployeeRepository employeeRepository;

    // Khởi tạo dữ liệu mẫu (theo lab)
    public EmployeeService() {
        // createList sẽ được gọi khi app start
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.getAllEmployees();
    }

    @Override
    public Employee getEmployeeById(String empId) {
        return employeeRepository.getEmployeeById(empId);
    }

    @Override
    public Employee create(Employee employee) {
        return employeeRepository.create(employee);
    }

    @Override
    public Employee delete(String empId) {
        return employeeRepository.delete(empId);
    }

    @Override
    public Page<Employee> getEmployeesWithPaging(Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }
}
