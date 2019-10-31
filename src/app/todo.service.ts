import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, delay, map, tap} from "rxjs/operators";

export interface Todo {
    completed: boolean
    title: string
    id?: number
}

@Injectable({providedIn: 'root'})
export class TodoService {
    constructor(private http: HttpClient) { }

    addTodo(todo: Todo):Observable<Todo> {
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
          headers: new HttpHeaders({
              'MyCustomHeader': Math.random().toString()
          })
        })
    }

    fetchTodos():Observable<Todo[]> {
        let params = new HttpParams()
            params = params.append('_length','5')
            params = params.append('SecondParam', 'value')

        return this.http.get<Todo[]>(
            'https://jsonplaceholder.typicode.com/todos', {
                // params: new HttpParams().set('_length', '3')
                params,
                observe: 'response'
            })
            .pipe(
                map(response => {
                    return response.body
                }),
                delay(500),
                catchError((error)=> {
                    return throwError(error)
                })
            )
    }

    removeTodo(id: number):Observable<any> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            observe: 'events'
        }).pipe(
            tap(event => {
                if(event.type === HttpEventType.Sent)
                {
                    console.log('Sent', event)
                }

                if(event.type === HttpEventType.Response)
                {
                    console.log('Response', event)
                }
            })
        )
    }

    completeTodo(id: number):Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: true
        }, {
            responseType: "json"
        })
    }
}