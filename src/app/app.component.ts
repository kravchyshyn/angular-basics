import {Component, OnInit} from '@angular/core';
import {Todo, TodoService} from "./todo.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    todos: Todo[] = []
    newTodoTitle: string = '';

    loading = false
    error = ''

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.fetchTodos()
    }

    addTodo() {
        if (!this.newTodoTitle.trim()) {
            return false;
        }

        const newTodo: Todo = {
            title: this.newTodoTitle,
            completed: false
        }

        this.todoService.addTodo(newTodo)
            .subscribe(response => {
                this.todos.unshift(response)
                this.newTodoTitle = ''
            })
    }

    fetchTodos() {
        this.loading = true
            this.todoService.fetchTodos()
            .subscribe(todos => {
                this.todos = todos
                this.loading = false
            }, error => {
                this.error = error.message
            })
    }

    removeTodo(id:number) {
        this.todoService.removeTodo(id)
            .subscribe(() => {
                this.todos = this.todos.filter(todo => todo.id !== id)
            })
    }

    completeTodo(id: number) {
        this.todoService.completeTodo(id)
            .subscribe((response) => {
                this.todos.find(todo => todo.id === response.id).completed = true
            })
    }
}