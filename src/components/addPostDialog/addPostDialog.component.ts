import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-addPostDialog',
  templateUrl: './addPostDialog.component.html',
  styleUrls: ['./addPostDialog.component.css']
})
export class AddPostDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPostDialogComponent>) { }

  ngOnInit() {
  }

  onPostClick() {
    this.dialogRef.close('Pizza!');
  }

}
