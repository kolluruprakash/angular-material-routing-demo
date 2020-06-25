import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // app_title="Home Component";
  @Input() app_title="";
  constructor() { }

  ngOnInit() {
  }

}