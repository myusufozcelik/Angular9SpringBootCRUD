import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/student/students'

  constructor(private http:HttpClient) { }

  getStudent(id:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(student:Object):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,student);
  }

  updateStudent(id:number, value:any):Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  deleteStudent(id:number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'})
  }

  getStudentsList():Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }
}
