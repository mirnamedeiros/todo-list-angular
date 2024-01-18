import { Component } from '@angular/core';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {NgForOf} from "@angular/common";
import {Task} from "../model/task.model";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [
    TodoItemComponent,
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  tasks: Task[] = [
    {
      title: "Criar componente de lista de tarefas",
      done: true
    },
    {
      title: "Estilizar o componente de item de tarefa",
      done: true
    },
    {
      title: "Adicionar funcionalidade de edição",
      done: false
    },
    {
      title: "Adicionar funcionalidade de remoção",
      done: false
    },
    {
      title: "Testar o aplicativo Angular",
      done: false
    }
  ];

}
