import { Component, OnInit } from '@angular/core';
import { ExcercisePlanComponent } from '../excercisePlan/excercisePlan.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
// https://stackoverflow.com/questions/44939878/dynamically-adding-and-removing-components-in-angular
// https://stackblitz.com/edit/add-or-remove-dynamic-component?file=src%2Fapp%2Fchild%2Fchild.component.ts
export class WorkoutComponent implements OnInit {
  chosenexe: string;
  exercises: string[] = ['Cardio', 'Strength'];
  times: string[] = ['15', '30', '45', '60'];

  public unique_key: number;
  public parentRef: ExcercisePlanComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
