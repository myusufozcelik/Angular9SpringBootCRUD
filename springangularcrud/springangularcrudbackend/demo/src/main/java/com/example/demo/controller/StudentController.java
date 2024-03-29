package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.repo.StudentRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/student")
public class StudentController {
	
	private StudentRepository repo;
	
	public StudentController(StudentRepository repo) {
		this.repo = repo;
	}
	
	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return repo.findAll();
	}
	
	@GetMapping("/students/{id}")
	public Optional<Student> findById(@PathVariable(value = "id")Long studentId) {
		return repo.findById(studentId);
	}
	
	@PostMapping("/students")
	public Student createStudent(@Validated @RequestBody Student student) {
		
		return repo.save(student);
	
	}
	
	@PutMapping("/students/{id}")
	public Student updateStudent(@PathVariable(value = "id")Long studentId, @Validated @RequestBody Student studentDetails)
	
	{
		Student student = repo.getOne(studentId);
		
		student.setFirstName(studentDetails.getFirstName());
		student.setLastName(studentDetails.getLastName());
		student.setId(studentDetails.getId());	
		return student;
	}
	
	@DeleteMapping("/students/{id}")
	public void deleteStudent(@PathVariable(value = "id") Long studentId) {
		repo.deleteById(studentId);
	}
	
}
