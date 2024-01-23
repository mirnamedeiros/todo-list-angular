import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoItemComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'todo-list-angular';

  spiralRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }
}
