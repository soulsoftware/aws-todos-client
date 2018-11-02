import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response, RequestOptions } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/ListTodoFunction')
      .pipe(map(response => {
        const todos = response.json();
      console.log("todos : " ,todos);
        if ( !todos.items ) return Observable.create();
        return  todos.items.map((todo) => 
        {
          return new Todo(todo)
        }
        
        );
      },error =>this.handleError))
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/AddTodoFunction', todo)
      .pipe(map(response => {
        console.log("response : " + response);
        return new Todo(response.json());
      },error => this.handleError))
      
  }

  
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + '/UpdateTodoFunction/' ,todo)
      .pipe(map(response => {
        console.log("response : " + response);
        return new Todo(response.json());
      },error => this.handleError))
     
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/DeleteTodoFunction/' , new RequestOptions( { body: { id: todoId } } ) )
      .pipe(map(response => null))
      
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
