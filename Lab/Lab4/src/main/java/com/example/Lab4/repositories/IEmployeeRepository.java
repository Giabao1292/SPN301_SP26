package com.example.Lab4.repositories;

import com.example.Lab4.pojos.Employee;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

@NoRepositoryBean
public interface IEmployeeRepository extends PagingAndSortingRepository<Employee, String> {
    public Employee getEmployeeById(String empId);
    public Employee delete(String id);

    public Employee create(Employee employee);
    public List<Employee> getAllEmployees();
}
