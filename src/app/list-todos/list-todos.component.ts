import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Router } from '@angular/router';
export class Todos {
  constructor(
    public id: number,
    public description: string,
    public target: Date,
    public isCompleted: boolean) {
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html'
})



export class ListTodosComponent implements OnInit {
  message: string;
  todos: Todos[];

  //todos = [new Todos(1, 'eye lasik', new Date(), false),
  //  new Todos(2, 'parotien', new Date(), false),
  //  new Todos(3, 'tax returns', new Date(), false)]

  //todosone = [
  //  { id: 1, description: 'Eye LASIK' },
  //  { id: 2, description: 'Gym' },
  //  { id: 3, description: 'Dinner' }
  //]

  constructor(private todoservice: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoservice.retreiveAllTodos('rayyanshaji').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
      )
  }


  deleteTodo(id) {
    this.todoservice.deleteTodo('rayyanshaji', id).subscribe(
      response => {
        console.log(response);
        this.message = `Deleted Todo ${id}`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Updated ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(id) {
    console.log(`Added ${id}`);
    this.router.navigate(['todos', -1]);
  }

}
