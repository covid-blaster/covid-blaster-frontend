import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ViewRef, Component, OnInit } from '@angular/core';
import { WorkoutComponent } from '../workout/workout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excercisePlan',
  templateUrl: './excercisePlan.component.html',
  styleUrls: ['./excercisePlan.component.css']
})

export class ExcercisePlanComponent implements OnInit {
  chosenexe: string;
  exercises: string[] = ['Cardio', 'Strength'];
  times: string[] = ['15', '30', '45', '60'];

  ngOnInit() {
  }

  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR: ViewContainerRef;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<WorkoutComponent>>()

  constructor(private CFR: ComponentFactoryResolver,
    private router: Router
    ) {}

  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(WorkoutComponent);
    let childComponentRef = this.VCR.createComponent(componentFactory);
    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.parentRef = this;
    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  changeRoute() {
    this.router.navigateByUrl("/feedPage");
  }

}
