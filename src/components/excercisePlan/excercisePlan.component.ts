import { Component, OnInit } from '@angular/core';
import { WorkoutComponent } from '../workout/workout.component';

@Component({
  selector: 'app-excercisePlan',
  templateUrl: './excercisePlan.component.html',
  styleUrls: ['./excercisePlan.component.css']
})
export class ExcercisePlanComponent implements OnInit {
  chosenexe: string;
  exercises: string[] = ['Cardio', 'Strength'];
  times: string[] = ['15', '30', '45', '60'];
  constructor() { }

  ngOnInit() {
  }

}
