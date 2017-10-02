import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  works: Array<any>;
  checkedItems: Array<any>;

  ngOnInit() {
    this.works = [
      {
        name: "Logo",
        value: "logo"
      },
      {
        name: "Ad",
        value: "ad"
      },
      {
        name: "Newsletter",
        value: "nw"
      },
      {
        name: "Site",
        value: "site"
      },
      {
        name: "Project",
        value: "project"
      }
    ]
  }

  onUpdate(event){
    this.checkedItems = event;
  }


}
