import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Priority} from '../models/priority';
import {Task} from '../models/task';

const todos: Task[] = [
  {
    id: 1,
    name: 'Create own website',
    isDone: false,
    priority: Priority.medium
  },
  {
    id: 2,
    name: 'Go to the gym',
    isDone: true,
    priority: Priority.high
  },
  {
    id: 3,
    name: 'Read book',
    isDone: false,
    priority: Priority.low
  }
];

@Injectable()
export class TasksService {

  private todoList$: BehaviorSubject<any> = new BehaviorSubject<any>(todos);

  constructor(private httpClient: HttpClient) {
  }

  getTasks(): Observable<any[]> {
    return this.todoList$;
  }

  addTask(task: Task): Observable<Task> {
    todos.push(task);
    return of<Task>(task);
  }

  completeTask(id: string | number): Observable<void> {
      const taskArrayId: number = todos.findIndex(task => task.id === id);
      todos[taskArrayId].isDone = true;
      return of<void>();
  }

  uncompleteTask(id: string | number): Observable<void> {
    const taskArrayId: number = todos.findIndex(task => task.id === id);
    todos[taskArrayId].isDone = false;
    return of<void>();
  }
}
