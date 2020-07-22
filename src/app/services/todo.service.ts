import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Priority} from '../models/priority';
import {Effect} from '@ngrx/effects';

const todos = [
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

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList$: BehaviorSubject<any> = new BehaviorSubject<any>(todos);

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Observable<any[]> {
    return this.todoList$;
  }
}
