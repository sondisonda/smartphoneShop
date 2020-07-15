import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  // private!!
  registerMode = false;
  loginMode = false;

  constructor() { }

  ngOnInit() {
  }



  registerToggle() {
    this.registerMode = true;
    this.loginMode = false;

  }

  loginToggle() {
    this.loginMode = true;
    this.registerMode = false;

  }

}
