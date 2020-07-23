import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
// formatowanie?
export class StartPageComponent implements OnInit {
  // trupy
  private _registerMode = false;
  private _loginMode = false;

  constructor() { }

  // po co to
  ngOnInit() {
  }



  registerToggle() {
    this._registerMode = true;
    this._loginMode = false;

  }

  loginToggle() {
    this._loginMode = true;
    this._registerMode = false;

  }

}
