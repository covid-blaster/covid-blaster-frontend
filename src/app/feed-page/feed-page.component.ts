import { AddPostDialogComponent } from './../../components/addPostDialog/addPostDialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  selectedConversation: any
  text: string
  events: Array<any> = []

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onAddPostClick() {
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      panelClass: 'dialog-add',
      autoFocus: true,
      height: '650px',
      width: '700px',
      maxHeight: '100%',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("Pizza"); // Pizza!
    // });

    // dialogRef.close('Pizza!');
  }

}
