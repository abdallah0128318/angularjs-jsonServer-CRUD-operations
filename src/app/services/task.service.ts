import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private  base_url = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable <Task[]>
  {
    return this.http.get<Task[]>(this.base_url);
  }

  deleteTask(task: Task): Observable<Task>
  {
    const url = `${this.base_url}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
