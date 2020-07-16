import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  createGroupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.createGroupFormMethod();
  }

  private createGroupFormMethod() {

    this.createGroupForm = this.formBuilder.group({
      groupName: ['', Validators.required]
    });
  }


}
