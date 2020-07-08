import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  loginMode = true;


  constructor() { }

  ngOnInit() {
  }


  login() {
    this.loginMode = true;
  }


  logout() {
    this.loginMode = false;

  }


}
