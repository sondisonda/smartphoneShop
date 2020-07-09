import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

private loginMode = true;


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
