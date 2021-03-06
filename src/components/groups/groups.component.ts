import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  createGroupForm: FormGroup;
  times: string[] = ['15', '30', '45', '60'];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit() {
    this.createGroupFormMethod();
  }

  private createGroupFormMethod() {

    this.createGroupForm = this.formBuilder.group({
      groupName: ['', Validators.required]
    });
  }

  changeRoute() {
    this.router.navigateByUrl('/excercisePlan')
  }


}
