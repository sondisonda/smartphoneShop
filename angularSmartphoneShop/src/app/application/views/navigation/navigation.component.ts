import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // trupy!
  private _loginMode = true;
  private _adminMode = true;



  constructor(private _translate: TranslateService
  ) { }

  ngOnInit() {
  }


  login() {
    this._loginMode = true;
  }


  logout() {
    this._loginMode = false;

  }

  toggleAdminMode() {
    this._adminMode = true;

  }

  toggleUserMode() {
    this._adminMode = false;

  }

}
