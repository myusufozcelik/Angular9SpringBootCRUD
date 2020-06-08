import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ObservableLike, Observable } from 'rxjs';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>

  constructor(private studentService: StudentService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentsList();
  }

  deleteStudent(id:number) {
    this.studentService.deleteStudent(id)
    .subscribe(data=> {
      console.log(data);
      this.reloadData();
    },
    error=> console.log(error))
  }

  studentDetails(id:number) {
    this.router.navigate(['details',id])
  }


}
