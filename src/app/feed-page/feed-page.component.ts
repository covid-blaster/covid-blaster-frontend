import { AddPostDialogComponent } from './../../components/addPostDialog/addPostDialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  fakepost:boolean;
  selectedConversation: any
  text: string
  events: Array<any> = []
  private router: Router
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fakepost = false;
  }

  onAddPostClick() {
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      panelClass: 'dialog-add',
      autoFocus: true,
      height: '650px',
      width: '700px',
      maxHeight: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
       this.fakepost = true;
    });

    // dialogRef.close('Pizza!');
  }
  onAddGroup() {
    this.router.navigateByUrl('/groups')
  }

}
