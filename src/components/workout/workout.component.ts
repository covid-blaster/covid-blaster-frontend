import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  chosenexe: string;
  exercises: string[] = ['Cardio', 'Strength'];
  times: string[] = ['15', '30', '45', '60'];
  constructor() { }

  ngOnInit(): void {
  }

}
