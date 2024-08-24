import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-logic',
  standalone: true,
  imports: [],
  templateUrl: './calc-logic.component.html',
  styleUrl: './calc-logic.component.css',
})
export class CalcLogicComponent {
raiz() {
  this.sum.emit(Math.pow(this.num1, 1 / this.num2));
}
  potencia() {
    this.sum.emit(this.num1 ** this.num2);
  }
  @Input() num1: number = 0;
  @Input() num2: number = 0;

  @Output() sum = new EventEmitter<number>();

  sumar() {
    this.sum.emit(this.num1 + this.num2);
  }

  restar() {
    this.sum.emit(this.num1 - this.num2);
  }

  multiplicar() {
    this.sum.emit(this.num1 * this.num2);
  }
  dividir() {
    this.sum.emit(this.num1 / this.num2);
  }
}
