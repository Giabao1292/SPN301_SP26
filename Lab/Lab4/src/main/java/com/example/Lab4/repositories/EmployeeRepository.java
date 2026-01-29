package com.example.Lab4.repositories;

import com.example.Lab4.pojos.Employee;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.stream.Collectors;

@Repository
public class EmployeeRepository implements IEmployeeRepository {

    private final List<Employee> employees = new ArrayList<>();

    public List<Employee> createList() {
        employees.clear();
        employees.add(new Employee("E01", "John", "Developer", 1000));
        employees.add(new Employee("E02", "Anna", "Tester", 900));
        employees.add(new Employee("E03", "Mike", "Manager", 1500));
        return employees;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employees;
    }
    @Override
    public Employee getEmployeeById(String empId) {
        return employees.stream()
                .filter(e -> e.getEmpId().equals(empId))
                .findFirst()
                .orElse(null);
    }
    @Override
    public Employee delete(String empId) {
        Employee emp = getEmployeeById(empId);
        if (emp != null) {
            employees.remove(emp);
        }
        return emp;
    }
    @Override
    public Employee create(Employee user) {
        employees.add(user);
        return user;
    }
    @Override
    public List<Employee> findAll(Sort sort) {
        if (sort.isUnsorted()) {
            return employees;
        }

        Sort.Order order = sort.iterator().next();

        return employees.stream()
                .sorted((e1, e2) -> {
                    int result = e1.getEmpId().compareTo(e2.getEmpId());
                    return order.isAscending() ? result : -result;
                })
                .collect(Collectors.toList());
    }
    @Override
    public Page<Employee> findAll(Pageable pageable) {
        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), employees.size());
        List<Employee> pageContent = employees.subList(start, end);
        return new PageImpl<>(
                pageContent,
                pageable,
                employees.size()
        );
    }
}
