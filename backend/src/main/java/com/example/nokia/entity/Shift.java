package com.example.nokia.entity;

import jakarta.persistence.*;

@Entity
@Table(name="shifts")
public class Shift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="emp_id")
    private String empId;

    private String shift;

    private String date;

    // getters & setters

    public int getId() { return id; }

    public String getEmpId() { return empId; }
    public void setEmpId(String empId) { this.empId = empId; }

    public String getShift() { return shift; }
    public void setShift(String shift) { this.shift = shift; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
}