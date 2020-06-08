import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

    id:number;
    student:Student;


  constructor(private route:ActivatedRoute,
    private router:Router,
    private studentService:StudentService) { }

  ngOnInit(): void {
    this.student = new Student();
    this.id = this.route.snapshot.params['id']

    this.studentService.getStudent(this.id)
    .subscribe(data=>{
      console.log(data)
      this.student = data;
    }, error=> console.log(error));
  }

  updateStudent() {
    this.studentService.updateStudent(this.id,this.student)
    .subscribe(data=> console.log(data),error=> console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  onSubmit() {
    this.updateStudent();
  }

  gotoList() {
    this.router.navigate(['/students'])
  }

}
