import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  selectedConversation: any
  text: string
  events: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
