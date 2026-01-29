package com.example.Lab4.pojos;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {
    @Id
    private String empId;
    private String name;
    private String designation;
    private double salary;

    public Employee(String empId, String designation, String name, double salary) {

        this.designation = designation;
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }

    public Employee() {

    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}
