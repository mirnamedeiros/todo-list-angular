import {Component, OnInit} from '@angular/core';
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {NgForOf} from "@angular/common";
import { Task } from '../model/task.model';

const todoListStorageKey = ' tasks';
@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [
    TodoItemComponent,
    NgForOf,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  editedTask!: Task;

  ngOnInit(): void {
    // this.save();
    this.tasks = this.load();
    console.log(this.tasks);
  }

  private load(): Task[] {
    const storedList = localStorage.getItem(todoListStorageKey);
    return (storedList ? JSON.parse(storedList) : []) as Task[];
  }

  private save() {
    localStorage.setItem(todoListStorageKey, JSON.stringify(this.tasks));
  }

  add(newTaskInput: HTMLInputElement) {
    const title = newTaskInput.value;

    if (title.trim() === '') {
      return;
    }

    const newTask: Task = {
      title: title,
      done: false
    };
    this.tasks.push(newTask);
    this.save();

    newTaskInput.value = '';
  }

  update(editTask: Task) {
    const index = this.tasks.indexOf(editTask);
    this.tasks[index] = editTask;
    this.save();
  }

  delete(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.save();
  }

}
