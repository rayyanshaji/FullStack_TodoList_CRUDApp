import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from './list-todos/list-todos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retreiveAllTodos(username) {
    return this.http.get<Todos[]>(`http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/users/${username}/todos/`);
  }

  deleteTodo(username,id) {
    return this.http.delete(`http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id) {
    return this.http.get<Todos>(`http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(`http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.http.post(`http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/users/${username}/todos/`, todo);
  }

}
