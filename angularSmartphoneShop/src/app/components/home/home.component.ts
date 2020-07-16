import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _registerMode = false;


  constructor() { }

  ngOnInit() {
  }

  registerToggle() {
    this._registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this._registerMode = false;
  }


}
