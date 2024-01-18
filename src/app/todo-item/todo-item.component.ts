import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() title!: string;
  @Input() done!: boolean;
  @Output() remove = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  removeTask() {
    this.remove.emit();
  }

  editTask() {
    this.edit.emit();
  }
}
