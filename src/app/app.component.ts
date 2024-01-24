import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';
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

export class AppComponent implements AfterViewInit {
  title = 'todo-list-angular';

  numberOfSpirals: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  spiralRange(n: number): number[] {
    return Array.from({ length: n }, (_, index) => index);
  }

  ngAfterViewInit() {
    this.calculateNumberOfSpirals();

    this.renderer.listen('window', 'resize', () => {
      this.calculateNumberOfSpirals();
    });
  }

  calculateNumberOfSpirals() {
    const screenWidth = window.innerWidth;

    this.numberOfSpirals = Math.max(1, Math.floor(screenWidth / 42));

    this.spiralRange(this.numberOfSpirals);
  }
}
