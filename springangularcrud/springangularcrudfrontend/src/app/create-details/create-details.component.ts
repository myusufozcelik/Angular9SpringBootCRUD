import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-create-details',
  templateUrl: './create-details.component.html',
  styleUrls: ['./create-details.component.css']
})
export class CreateDetailsComponent implements OnInit {

  id:number;
  student:Student;

  constructor(private route:ActivatedRoute,private router:Router,
    private studentService:StudentService) { }

  ngOnInit(): void {
    
  }



}
