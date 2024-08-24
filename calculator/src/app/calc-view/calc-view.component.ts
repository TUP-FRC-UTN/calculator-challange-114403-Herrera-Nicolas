import { Component } from '@angular/core';
import { CalcLogicComponent } from "../calc-logic/calc-logic.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcLogicComponent, FormsModule],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
num1: number=0;
num2: number=0;
result:number=0;

}
