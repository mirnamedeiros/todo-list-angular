import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../model/task.model";
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input() task!: Task;

  @Output() remove = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Task>();
  @Output() done = new EventEmitter<void>();

  editing: boolean = false;
  editedTitle: string = '';

  removeTask() {
    this.remove.emit();
  }

  editingTask() {
    this.toggleEditing();
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  toggleDone() {
    this.task.done = !this.task.done;
    this.edit.emit(this.task);
  }

  confirmEdit(title: string) {
    this.task.title = title;
    this.edit.emit(this.task);
    this.toggleEditing();
  }

  cancelEdit() {
    this.toggleEditing();
  }
}
